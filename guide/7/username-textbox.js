import relm from 'relm';
import Textbox from './textbox';

export function checkable (displayName, child, opts) {
  const validate = opts.validate || function noop () {};

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

    update (state, action) {
      const updatedChildState = child.update(state.childState, action);

      // No change
      if (updatedChildState === state.childState) return state;

      // Child state changed so re-validate it
      const validationResult = validate(updatedChildState) || {};

      return {
        childState: updatedChildState,
        validationState: {
          ...validationResult,
          isDirty: true
        }
      };
    },

    view (props, ...args) {
      const { validationState, childState } = props.state;

      const childProps = {
        // Provide validation state (error, warning, etc.) to the child view
        ...validationState,

        // Copy any other props
        ...props,

        // Provide the unwrapped child state
        state: childState
      };

      return child.view(childProps, ...args);
    }
  });
}

export default checkable('UsernameTextbox', Textbox, {
  validate (username) {
    if (!username) {
      return { warning: 'Username is required' };
    }

    const minLength = 3;
    if (username.length < minLength) {
      return { error: `Username is too short (need minimum ${minLength} characters)` };
    }
  }
});
