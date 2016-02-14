import relm from 'relm';
import FancyGreeting from './fancy-greeting';
import UsernameTextbox from './username-textbox';

export default relm.component('FancyForm', {
  init: UsernameTextbox.init,
  update: UsernameTextbox.update,
  view: ({ state, dispatch, styles }) => (
    <form style={styles.container}>
      <FancyGreeting
        name={state.validationState.fullName || state.childState}
        styles={{ heading: styles.greeting }}
      />

      <UsernameTextbox
        styles={{ input: styles.textbox }}
        label='Username'
        dispatch={dispatch}
        state={state}
      />
    </form>
  ),

  styles: {
    container: {
      display: 'block',
      maxWidth: '400px',
      margin: '2rem auto',
      padding: '2rem',

      background: '#eeeeee',
      borderRadius: '4px',
      boxShadow: '2px 2px 8px -2px #9e9e9e'
    },

    greeting: {
      fontFamily: 'Arial',
      fontSize: '1.5rem',
      textAlign: 'left',
      color: '#ff5722',
    }
  }
});
