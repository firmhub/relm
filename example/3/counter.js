const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

export function init () {
  return 0;
}

export function update (state = init(), action = {}) {
  switch (action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    default: return state;
  }
}

export function view ({ state, dispatch }) {
  // Create click event handler functions
  const dispatchIncrementAction = (event) => dispatch({ type: INCREMENT });
  const dispatchDecrementAction = (event) => dispatch({ type: DECREMENT });

  // Render the counter
  return (
    <div>
      <button onClick={dispatchDecrementAction}>-</button>
      <span style={{ padding: '4px 12px' }}>{state}</span>
      <button onClick={dispatchIncrementAction}>+</button>
    </div>
  );
}
