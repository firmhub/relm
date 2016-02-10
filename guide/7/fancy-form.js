import relm from 'relm';
import FancyGreeting from './fancy-greeting';
import Textbox from './textbox';

const Fields = relm.combineComponents({
  Name: Textbox,
  Username: Textbox,
  Password: Textbox,
});

const FIELD_ACTION = 'form/textbox_action';

export default relm.component('FancyForm', {
  init: () => ({
    fields: Fields.init()
  }),

  update: {
    [FIELD_ACTION]: {
      statePath: ['fields'],
      actionPath: ['payload'],
      updateHandler: Fields.update
    }
  },

  view ({ state, dispatch, styles }) {
    const { Name, Username, Password } = Fields.getViews({
      state: state.fields,
      dispatch: dispatch.payload(FIELD_ACTION)
    });

    return (
      <form style={styles.container}>
        <FancyGreeting.view
          name={state.fields.Name}
          styles={{ heading: styles.greeting }}
        />

        <Name />
        <Username />
        <Password />
      </form>
    );
  },

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
