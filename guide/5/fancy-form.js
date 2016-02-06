import relm from 'relm';
import FancyGreeting from './fancy-greeting';
import Textbox from './textbox';

const TEXTBOX_ACTION = 'form/textbox_action';

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

  view: ({ state, dispatch }) => (
    <form>
      <FancyGreeting.view name={state.name} />

      <Textbox.view
        dispatch={dispatch.assign('payload', { type: TEXTBOX_ACTION })}
        state={state.name}
      />
    </form>
  )
});
