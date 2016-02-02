# Counting many things
> __relm guide__: Tutorial no. 4 - Nested components

So far in this guide, we have been creating solitary components since our requirements have been very simple. In order to write more complex applications in a manageable way, you will need to make components which contain other components, which may contain other components. This is where the patterns introduced so far will start to pay dividends.

In relm, components are responsible for managing their own state and the state of their immediate child components, if any. Doing so adds complexity to a component, however, this complexity is manageable. For now, we are also going to keep doing things the long way to better understand inner workings. In the next example, we will start introducing helpers and streamlining the code we create in this example.

Note: This is also where the `relm` approach starts to differ from the approach in `redux` or `flux`. `relm` components and state mutations are __composed up__, whereas `redux` has a top down approach to mutation. If you are interested, you can [read about the differences](#TODO).

### Component

Enough talk, the component we are building will be a list of counters. The `counter-list` component will maintain a list of counters, using the previously created `counter` component for rendering, etc. The `counter` component is completely unchanged from our previous example, so let's go through the new file `counter-list.js`:

Have a glance at the code in `counter.js` file. We will start working our way through the file and discuss each section.

##### Action types

```javascript
const ADD = 'counter-list/add-counter';
const REMOVE = 'counter-list/remove-counter';
const CHILD_ACTION = 'counter-list/child-action';
```

The `CounterList` component will have two possible actions of its own; either adding a counter or removing a counter from the list it maintains.

The third action is special in that it will not change the `CounterList` but it will change the state of a counter within the list. Every time `CHILD_ACTION` occurs, we will pass the action's payload to `Counter.update` for doing the actual work involved in updating the counter.  

##### Init

```javascript
export function init () {
  return [];
}
```

The `CounterList`'s state will just be an array where we will store all the counters. The above will simple create an empty list, but let's say we wanted to already have a counter on the screen when we start, we could modify the `init` function as such:

```javascript
// Example: start with one counter already on the screen
export function init () {
  return [ Counter.init() ];
}
```

##### Update

```javascript
export function update (state = init(), action = {}) {
  switch (action.type) {
    case ADD: return state.concat(Counter.init());
    case REMOVE: return immutableSplice(state, action.index);
    case CHILD_ACTION: return updateNestedCounter(state, action.payload);
    default: return state;
  }
}
```
The update function is relatively straight forward, but let's see what is going on. Note that the state in this case will be our array of counters:

1. On `ADD`, we `concat()` a brand new counter to the end of the list.
2. On `REMOVE`, we pass the list and the `index` property from the action to an `immutableSplice` function which we will discuss shortly
3. On `CHILD_ACTION` we pass the state and action to another function `updateNestedCounter`, also discussed below
4. In all other cases, we simple return the `state` untouched

The `immutableSplice` function is simply a helper which performs a splice function on a copy of the array instead of on the original array. You can [read about immutabilty here](#TODO) but the main concept is that if every time that state changes, we return a changed copy instead of the original state, it allows us to do fast/simple equality(`===`) checks.

The `updatedNestedCounter` function is more interesting:

```javascript
function updateNestedCounter (state, action) {
  const current = state[action.index];
  const updated = Counter.update(current, action.payload);

  // Counter is unchanged, so just return state
  if (current === updated) return state;

  // We have new nested state, so update our list
  return immutableSplice(state, action.index, updated);
}
```
When `updatedNestedCounter` function receives an action, it will get the current state of the corresponding counter, then pass the `payload` property to the `Counter.update` function for the updating work. If we don't get back a new value from the update operation then we skip updating the state (here the easy checking comes in handy).

##### View

As with the other sections above, nesting a component has added some complexity to our view as well. Let's see what is going on:

```javascript
export function view ({ state, dispatch }) {
  const addClicked = () => dispatch({ type: ADD });

  // function nestedCounterView shown below

  return (
    <div>
      {state.map(nestedCounterView)}
      <button onClick={addClicked}>Add counter</button>
    </div>
  );
}
```

Our `CounterList` view contains:
1. list of counters which is created by mapping over the state with the `nestedCounterView` function
2. An `Add counter` button which when clicked dispatches an action with type `ADD`

Let's see the internal `nestedCounterView` function:

```javascript
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
```
Each counter in our list will be rendered within another `div` which a `Remove` button beside it, so it can be removed.

`removeClicked` is the event handler that handles the remove click; notice that it passes the index of the counter along with the `REMOVE` type. If you recall, we use the index in our `update` function to splice the state and remove the counter at the given index.

The second function `childDispatch` handles incoming actions from the `Counter.view`. Again, if you recall from the previous example, the `Counter.view` function requires a dispatch function in its props. Here we are creating that dispatch function.

#### Action creators

If you take a look above, in our `childDispatch` function we call another function named `$CHILD_ACTION`. This function is an example of an action creator in relm.

Action creators are simply functions that return an action object. They are useful in certain scenarios and are used in `redux` and `flux`. They are not always necessary in relm as majority of the time actions are dispatched/handled/etc. in just a single file but they have some uses. For now, just have a look at what `$CHILD_ACTION` is doing:

```javascript
function $CHILD_ACTION (counterIndex, counterAction) {
  return {
    type: CHILD_ACTION,
    index: counterIndex,
    payload: counterAction,
  };
}
```
It is simply taking some arguments and then returning an object with the type set correctly and the arguments serialized in a specific way. Notice the `payload` property we used in `updatedNestedCounter` is being created here.

Additionally, I like to follow a convention of always naming my action creators with a `$` sign followed by the variable I am using for my action type (which I always keep uppercase). This is entirely convention, but it means I have to come up with fewer names and I see exactly what is going on when I see a function named that way.

### Recap

We have seen a lot of things in this example and introduced a few new concepts. Have a look again at `counter-list.js` as a whole to get an understanding of what is going on.

Our `CounterList` component has had to manage its own state (the array) and the state of its child components (the elements in the array). This added a lot of complexity to the `update` and the `view` function. We also created a few helper functions to help us manage that complexity.

### Bootstrap

The bootstrap file `index.js` is mostly unchanged. The `CounterList` is now our top level component instead of `Counter` in the previous example.

```javascript
import { startApp } from 'relm/react-dom';
import * as CounterList from './counter-list';

const container = document.createElement('div');
document.body.appendChild(container);

// This time our top level component is the CounterList
startApp(container, CounterList);
```

### Finishing up

Run `npm run build` to see your build and see the results of your hard work. I hope you are still with me. See you in the next example where we will start making things easy for ourselves.
