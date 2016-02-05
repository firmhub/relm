import * as FancyGreeting from './fancy-greeting';
import * as Textbox from './textbox';

const TEXTBOX_ACTION = 'form/textbox_action';

export function init () {
  return {
    name: Textbox.init()
  };
}

export function update (state = init(), action = {}) {
  if (action.type === TEXTBOX_ACTION) {
    return {
      name: Textbox.update(state.name, action.payload)
    };
  } else {
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
      <FancyGreeting.view name={state.name} />

      <Textbox.view
        dispatch={handleTextboxAction}
        state={state.name}
      />
    </form>
  );
}

export default { init, update, view };
