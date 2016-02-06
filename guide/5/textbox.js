import { component } from 'relm';

const CHANGE = 'textbox/change';

function $CHANGE (event) {
  return { type: CHANGE, value: event.target.value };
}

export default component('Textbox', {
  init: (value = '') => value,

  update: {
    [CHANGE]: (state, action) => action.value
  },

  view: ({ dispatch, state }) => (
    <div>
      <label style={{ display: 'block' }}>
        Value of input box is: {state}
      </label>
      <input
        onInput={dispatch.partial($CHANGE)}
        type='text'
        value={state}
      />
    </div>
  )
});
