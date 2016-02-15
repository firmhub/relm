import relm from 'relm';
import request from 'superagent';
import Textbox from './textbox';

export function checkable (displayName, child, opts) {
  const UPDATE = 'checkable/async/updated';
  const VALIDATE = 'checkable/async/validated';

  function $UPDATE (dispatch, state, action) {
    // Who says child.update() has to be called inside our update()
    // function; we can call it earlier if we need to; like we do in
    // this case
    const updatedState = child.update(state.childState, action);
    if (updatedState === state.childState) return state;

    // Dispatch actions as needed here. Since we do not want the
    // user interface to block while the validate function runs,
    // we update the state before running the function
    dispatch({ type: UPDATE, updatedState });

    // Create the callback function we will provide to the validator
    // We partially bind the updated state, since we can match
    // the validation results to the state that was checked
    const callbackFn = dispatch.using($VALIDATE, updatedState);

    // Let's call our user provided validation with our
    // callback as second argument
    opts.validate(updatedState, callbackFn);
  }

  function $VALIDATE (checkedState, validationResult) {
    // $VALIDATE is called by dispatch.using so we are back
    // in synchronous land; simply return the action
    return {
      type: VALIDATE,
      checkedState,
      validationResult
    };
  }

  return relm.component(displayName, {
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

    update: {
      [UPDATE]: (state, action) => ({
        ...state,
        childState: action.updatedState,
        validationState: { ...state.validationState, isDirty: true }
      }),

      [VALIDATE]: (state, action) => {
        const { checkedState, validationResult } = action;

        // Since $VALIDATE is called asynchronously, it means
        // that state could have been modified since we made our
        // request. This is why we check; if we find a mismatch
        // then we ignore this result
        if (state.childState !== checkedState) return state;

        return {
          ...state,
          validationState: { ...validationResult, isDirty: true }
        };
      }
    },

    view (props, ...args) {
      const { state, dispatch } = props;
      const { validationState, childState } = state;

      const childProps = {
        // Same as previous example
        ...validationState,
        ...props,
        state: childState,

        // Here we need to override dispatch because we want
        // to perform some work on each action; dispatch.from()
        // means actions will be dispatched as needed from within
        // the $UPDATE function. We partially bind state so we
        // can use it inside our $UPDATE function
        dispatch: dispatch.from($UPDATE, state)
      };

      return child.view(childProps, ...args);
    }
  });
}

export default checkable('UsernameTextbox', Textbox, {
  validate (username, done) {
    if (!username) {
      // Note: done needs to be called with the validation result
      return done({
        warning: 'Username is required'
      });
    }

    const minLength = 5;
    if (username.length < minLength) {
      // Note: done called here as well
      return done({
        error: `Username is too short (need minimum ${minLength} characters)`
      });
    }

    // Now for some more advanced stuff; check github
    // to see if username exists
    request
      .get(`https://api.github.com/users/${username}`)
      .end(function handleResponse (err, res) {
        if (err) {
          // If a 404 error, then we have a special error message
          if (res.notFound) return done({ error: 'Username not found' });

          // For all other errors, show generic error message
          return done({ error: res.statusText || err.message });
        }

        // No error, means a username exists
        done({ fullName: res.body.name });
      });
  }
});
