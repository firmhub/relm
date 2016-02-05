// Action types
const CHANGE = 'textbox/change';

// Init
export function init (value = '') {
  return value;
}

// Update
export function update (state = init(), action = {}) {
  if (action.type === CHANGE) return action.value;
  return state;
}

// View
export function view ({ dispatch, state }) {
  // Event handler
  const handleChange = e => dispatch({ type: CHANGE, value: e.target.value });

  return (
    <div>
      <label style={{ display: 'block' }}>Value of input box is: {state}</label>
      <input
        onInput={handleChange}
        type='text'
        value={state}
      />
    </div>
  );
}
