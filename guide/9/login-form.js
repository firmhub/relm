import relm from 'relm';

import UsernameTextbox from './unchanged/username-textbox';
import Textbox from './unchanged/textbox';
import Checkbox from './checkbox';
import FancyGreeting from './unchanged/fancy-greeting';

const LoginFields = relm.combineComponents('LoginFields', [
  UsernameTextbox,
  Textbox,
  Checkbox,
]);

export default relm.component('LoginForm', {
  init: LoginFields.init,
  update: LoginFields.update,
  view (props) {
    const { state, classes, styles } = props;

    // Get the components with pre-applied props
    const [ Username, Password, RememberMe ] = LoginFields.with(props);

    // We will also need the username state for our fancy-greeting,
    // so get that from the state (at index 0)
    const [ usernameState ] = state;

    return (
      <form className={classes.container}>
        <FancyGreeting
          name={usernameState.validationState.fullName || usernameState.childState}
          styles={{ heading: styles.greeting }}
        />

        <Username label='Username' placeholder='Your github username' />
        <Password label='Password' type='password' />
        <RememberMe label='Remember me' />

        <button
          className={classes.largeButton}
          type='submit'>
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
