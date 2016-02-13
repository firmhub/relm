import _ from 'lodash';
import { component } from '../internals/component';

function syncValiator (displayName, child, opts) {
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
      const result = opts.validate(clone);
      if (!result) return clone;

      return { ...clone, ...result };
    },

    view (props, ...args) {
      const { state } = props;

      const childProps = {
        error: state.error,
        warning: state.warning,
        isDirty: state.isDirty,
        ...props,
        state: state.value,
      };

      return child.view(childProps, ...args);
    }
  });
}

function asyncValiator (displayName, child, opts) {
  const UPDATE = `${displayName}/async/request`;
  const VALIDATE = `${displayName}/async/validate`;

  const pending = new WeakMap();

  function $UPDATE (dispatch, state, action) {
    // Get the updated value and see if it has changed
    const value = child.update(state.value, action);
    if (value === state.value) return;

    // Abort previous request, if pending
    const previous = pending.get(state.request);
    if (previous && _.isFunction(previous)) previous();

    // Create a unique reference for the
    // cancel function returned from validator
    const request = {};

    // Update the state
    dispatch({ type: UPDATE, value, request });

    // Validate the updated value
    const done = dispatch.using($VALIDATE, request, value);
    const cancel = opts.validate({ ...state, value }, done);

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
      [UPDATE]: (state, { value, request }) => ({ ...state, value, request }),

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
        // Copy over some validation related properties from state
        error: state.error,
        warning: state.warning,
        isDirty: state.isDirty,

        // Allow the parent components to override validation
        // properties, if needed
        ...props,

        // Unwrap the child state
        state: state.value,

        // Receive all child actions using $UPDATE action creator
        dispatch: dispatch.from($UPDATE, state)
      };

      return child.view(childProps, ...args);
    }
  });
}

export function checkable (displayName, comp, opts) {
  if (opts.validate.length < 2) {
    return syncValiator(displayName, comp, opts);
  }

  return asyncValiator(displayName, comp, opts);
}
