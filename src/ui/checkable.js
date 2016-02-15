import _ from 'lodash';
import { component } from '../internals/component';

function setPath (props, resultPath, state) {
  if (!_.isArray(resultPath)) return props;
  if (!resultPath.length) return _.extend(props, state);
  return _.set(props, resultPath, state);
}

function syncValiator (displayName, child, opts) {
  const { resultPath, validate } = opts;

  return component(displayName, {
    init (...args) {
      return {
        childState: child.init(...args),
        validationState: {
          error: '',
          warning: '',
          isDirty: false
        }
      };
    },

    update (state, action) {
      const updatedState = child.update(state.childState, action);
      if (updatedState === state.childState) return state;

      const result = validate(updatedState) || {};

      return {
        childState: updatedState,
        validationState: { ...result, isDirty: true }
      };
    },

    view (props, ...args) {
      const { childState, validationState } = props.state;

      // Add validation state to child props, if requested
      const childProps = { ...props, state: childState };

      setPath(childProps, resultPath, validationState);

      return child.view(childProps, ...args);
    }
  });
}

function asyncValiator (displayName, child, opts) {
  const UPDATED = `${displayName}/checkable/request`;
  const VALIDATED = `${displayName}/checkable/validate`;

  const { resultPath } = opts;
  let { validate } = opts;

  if (opts.delay) {
    validate = _.throttle(validate, opts.delay, {
      leading: false,
      trailing: true
    });
  }

  const pending = new WeakMap();

  function $UPDATED (dispatch, { childState, validationState }, action) {
    // Get the updated value and see if it has changed
    const updatedState = child.update(childState, action);
    if (updatedState === childState) return;

    // Abort previous request, if pending
    const previous = pending.get(validationState.request);
    if (previous && _.isFunction(previous)) previous();

    // Create a unique reference for the
    // cancel function returned from validate
    const request = {};

    // Update the state
    dispatch({ type: UPDATED, childState: updatedState, request });

    // Validate the updated childState
    const done = dispatch.using($VALIDATED, request, updatedState);
    const cancel = validate(updatedState, done);

    pending.set(request, cancel);
  }

  function $VALIDATED (request, checked, result = {}) {
    // Clear reference to completed request
    pending.delete(request);

    return {
      type: VALIDATED,
      checked,
      result,
    };
  }

  return component(displayName, {
    init (...args) {
      return {
        childState: child.init(...args),
        validationState: {
          error: '',
          warning: '',
          isDirty: false,
          isPending: false
        }
      };
    },

    update: {
      [UPDATED]: (state, { childState, request }) => ({
        childState,
        validationState: {
          ...state.validationState,
          isPending: true,
          request
        }
      }),

      [VALIDATED]: (state, { checked, result }) => {
        // If validation finishes after another change
        // has already occured, we ignore it
        if (checked !== state.childState) return state;

        result.isPending = false;
        result.isDirty = true;

        return {
          childState: checked,
          validationState: result
        };
      }
    },

    view (props, ...args) {
      const { dispatch, state } = props;
      const { childState, validationState } = state;

      const childProps = {
        ...props,
        state: childState,
        dispatch: dispatch.from($UPDATED, state)
      };

      setPath(childProps, resultPath, validationState);

      return child.view(childProps, ...args);
    }
  });
}

export function checkable (displayName, comp, opts) {
  _.defaults(opts, {
    validate: _.noop
  });

  if (opts.validate.length < 2) {
    return syncValiator(displayName, comp, opts);
  }

  return asyncValiator(displayName, comp, opts);
}
