import relm from 'relm';

import FancyGreeting from './unchanged/fancy-greeting';
import UsernameTextbox from './unchanged/username-textbox';
import Textbox from './unchanged/textbox';
import Checkbox from './unchanged/checkbox';

const LoginFields = relm.combineComponents('LoginFields', [
  UsernameTextbox,
  Textbox,
  Checkbox,
]);

// Serialize state; it is better to do this work here
// so that the parent has to know less about how our form
// stores its state
function serialize ([ username, password, remember ]) {
  return {
    username: username.childState,
    password,
    remember
  };
}

export default relm.component('LoginForm', {
  init: LoginFields.init,
  update: LoginFields.update,
  view (props) {
    // Same as before
    const { state, classes, styles, onLogin, error } = props;
    const [ Username, Password, RememberMe ] = LoginFields.with(props);
    const [ usernameState ] = state;

    // New stuff; an onLogin callback and an error message, if any
    // can be provided by the parent through the props
    const submitForm = (event) => onLogin(serialize(state), event);
    const errorMessage = !error ? null : (
      <div className={classes.errorAlert}>
        {error}
      </div>
    );

    return (
      <form className={classes.container}>
        <FancyGreeting
          name={usernameState.validationState.fullName || usernameState.childState}
          styles={{ heading: styles.greeting }}
        />

        <Username label='Username' placeholder='Your github username' />
        <Password label='Password' type='password' />
        <RememberMe label='Remember me' />

        {errorMessage}

        <button
          className={classes.largeButton}
          type='submit'
          onClick={submitForm}>
          Submit
        </button>
      </form>
    );
  },

  classes: {
    container: {
      display: 'block',
      maxWidth: '400px',
      margin: '2rem auto',
      padding: '2rem',

      background: '#eeeeee',
      borderRadius: '4px',
      boxShadow: '2px 2px 8px -2px #9e9e9e'
    },

    errorAlert: {
      padding: '1rem',
      border: '1px solid #ef9a9a',
      borderRadius: '2px',
      background: '#ffcdd2',
      margin: '1rem 0',
    },

    largeButton: {
      display: 'block',
      width: '100%',
      fontSize: '1.1em',
      padding: '0.5rem'
    }
  },

  styles: {
    greeting: {
      fontFamily: 'Arial',
      fontSize: '1.5rem',
      textAlign: 'left',
      color: '#ff5722',
    },
  }
});
