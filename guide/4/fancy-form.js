import * as FancyGreeting from './fancy-greeting';
import * as Textbox from './textbox';

const TEXTBOX_ACTION = 'form/textbox_action';

export function init () {
  return {
    name: Textbox.init()
  };
}

export function update (state = init(), action = {}) {
  switch (action.type) {
    case TEXTBOX_ACTION:
      return {
        name: Textbox.update(state.name, action.payload)
      };

    default:
      return state;
  }
}

export function view ({ state, dispatch }) {
  // When a text box action occurs, we wrap that action with
  // our TEXTBOX_ACTION type and dispatch it
  function handleTextboxAction (action) {
    dispatch({
      type: TEXTBOX_ACTION,
      payload: action
    });
  }

  return (
    <form>
      <FancyGreeting name={state.name} />

      <Textbox
        dispatch={handleTextboxAction}
        state={state.name}
      />
    </form>
  );
}

export default { init, update, view };
