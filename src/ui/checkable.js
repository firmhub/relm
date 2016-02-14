import _ from 'lodash';
import { component } from '../internals/component';

function setPath (props, propsPath, state) {
  if (!_.isArray(propsPath)) return props;
  if (!propsPath.length) return _.extend(props, state);
  return _.set(props, propsPath, state);
}

function syncValiator (displayName, child, opts) {
  const { propsPath, validate } = opts;

  return component(displayName, {
    init (...args) {
      return {
        value: child.init(...args),
        error: '',
        warning: '',
        isDirty: false
      };
    },

    update (state, action) {
      const updated = child.update(state.value, action);
      if (updated === state.value) return state;

      const clone = { value: updated, isDirty: true };
      const result = validate(clone);
      if (!result) return clone;

      return { ...clone, ...result };
    },

    view (props, ...args) {
      const { state } = props;

      const childProps = { ...props, state: state.value };

      // Add validation state to child props, if requested
      setPath(childProps, propsPath, state);

      return child.view(childProps, ...args);
    }
  });
}

function asyncValiator (displayName, child, opts) {
  const UPDATE = `${displayName}/async/request`;
  const VALIDATE = `${displayName}/async/validate`;

  const { propsPath } = opts;
  let { validate } = opts;

  if (opts.delay) {
    validate = _.throttle(validate, opts.delay, {
      leading: false,
      trailing: true
    });
  }

  const pending = new WeakMap();

  function $UPDATE (dispatch, state, action) {
    // Get the updated value and see if it has changed
    const value = child.update(state.value, action);
    if (value === state.value) return;

    // Abort previous request, if pending
    const previous = pending.get(state.request);
    if (previous && _.isFunction(previous)) previous();

    // Create a unique reference for the
    // cancel function returned from validate
    const request = {};

    // Update the state
    dispatch({ type: UPDATE, value, request });

    // Validate the updated value
    const done = dispatch.using($VALIDATE, request, value);
    const cancel = validate({ ...state, value }, done);

    pending.set(request, cancel);
  }

  function $VALIDATE (request, checked, result = {}) {
    // Clear reference to completed request
    pending.delete(request);

    return {
      type: VALIDATE,
      checked,
      result,
    };
  }

  return component(displayName, {
    init (...args) {
      return {
        value: child.init(...args),
        error: '',
        warning: '',
        isDirty: false,
      };
    },

    update: {
      [UPDATE]: (state, { value, request }) => ({
        // Store the latest value and request in the state
        ...state, value, request
      }),

      [VALIDATE]: (state, { checked, result }) => {
        // If validation finishes after another change
        // has already occured, we ignore it
        if (checked !== state.value) return state;

        // Update the state; take the object provided
        // by the validation function (ex, with error or
        // warning), then add the checked value to it
        // This will be the new state of the control
        result.value = checked;
        result.isDirty = true;
        return result;
      }
    },

    view (props, ...args) {
      const { state, dispatch } = props;

      const childProps = {
        ...props,
        // Unwrap the child state
        state: state.value,
        // Receive all child actions using $UPDATE action creator
        dispatch: dispatch.from($UPDATE, state)
      };

      // Add validation state to child props, if requested
      setPath(childProps, propsPath, state);

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
