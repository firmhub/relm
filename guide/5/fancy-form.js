import relm from 'relm';
import FancyGreeting from './fancy-greeting';
import Textbox from './textbox';

const TEXTBOX_ACTION = 'form/textbox_action';

function $TEXTBOX_ACTION (childAction) {
  return { type: TEXTBOX_ACTION, payload: childAction };
}

export default relm.component('FancyForm', {
  init: () => ({
    name: Textbox.init()
  }),

  update: {
    [TEXTBOX_ACTION]: {
      statePath: ['name'],
      actionPath: ['payload'],
      updateHandler: Textbox.update
    }
  },

  view: ({ state, dispatch, styles }) => (
    <form style={styles.container}>
      <FancyGreeting.view
        name={state.name}
        styles={{ heading: styles.greeting }}
      />

      <Textbox.view
        dispatch={dispatch.using($TEXTBOX_ACTION)}
        state={state.name}
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
