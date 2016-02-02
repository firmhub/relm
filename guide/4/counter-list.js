import * as Counter from './counter';

// Action types
const ADD = 'counter-list/add-counter';
const REMOVE = 'counter-list/remove-counter';
const CHILD_ACTION = 'counter-list/child-action';

// Let's introduce some helpers first

// This function is an action creator - it takes
// some arguments and return an object which has
// the type property set on it plus any other info
function $CHILD_ACTION (counterIndex, counterAction) {
  return {
    type: CHILD_ACTION,
    index: counterIndex,
    payload: counterAction,
  };
}

// This function makes a copy of an array before
// executing a splice operation on it
function immutableSplice (array, index, ...elements) {
  const clone = array.slice();
  clone.splice(index, ...elements);
  return clone;
}

// This function will pass our child actions to
// the Counter component's update function
function updateNestedCounter (state, action) {
  const current = state[action.index];
  const updated = Counter.update(current, action.payload);

  // Counter is unchanged, so just return state
  if (current === updated) return state;

  // We have new nested state, so update our list
  return immutableSplice(state, action.index, updated);
}

// The rest of the functions are the usual suspects
// found in a relm component: init, update and view

export function init () {
  return [];
}

export function update (state = init(), action = {}) {
  switch (action.type) {
    case ADD: return state.concat(Counter.init());
    case REMOVE: return immutableSplice(state, action.index);
    case CHILD_ACTION: return updateNestedCounter(state, action);
    default: return state;
  }
}

export function view ({ state, dispatch }) {
  const addClicked = () => dispatch({ type: ADD });

  function nestedCounterView (counterState, index) {
    const removeClicked = () => dispatch({ type: REMOVE, index });
    const childDispatch = (action) => dispatch($CHILD_ACTION(index, action));

    return (
      <div>
        <Counter.view dispatch={childDispatch} state={counterState} />
        <button onClick={removeClicked}>Remove</button>
      </div>
    );
  }

  return (
    <div>
      {state.map(nestedCounterView)}
      <button onClick={addClicked}>Add counter</button>
    </div>
  );
}
