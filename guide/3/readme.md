# Counting things
> __relm guide__ \ Tutorial no. 3 - Component state

In the the previous example, we created a component `FancyGreeting`, which received from its parent component, bits of information (`props`) that changed the way how the output looked and what message it displayed. In this example, we will introduce the concept of component `state` which is information that the component maintains internally.

For example, if we were writing a form component, the values entered by a user in the form will be the form's internal state.

To show how to write these stateful components, we will create a counter component. The counter will be a component with two buttons, a plus (`+`) and minus (`-`). The counter will be also display a number which can then be incremented or decremented by clicking the corresponding button.

The counter will initially start at `0`.

### Component

Relm components follow the elm architecture pattern for state management. This patterns has a lot of benefits for managing application state but there are also a few concepts that need to be introduced

Have a glance at the code in `counter.js` file. We will start working our way through the file and discuss each section.

##### Action types

```javascript
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';
```

At the top of the file we have two action types declared. These correspond to the number of ways the state of our component can change. Either the counter can be incremented or it can be decremented, so we only have two action types.

If you are familiar with redux, the concept of action types is the same, however, they are generally not exported from a module as they are rarely needed outside of a component. They still need to be unique but in case of conflicts, the change is generally in one place only.

I use the following format for my types to avoid conflicts all together and maintain consistency in my codebase (and these examples):

`<component name>/<action name>`

##### Init

```javascript
export function init () {
  return 0;
}
```

The `init` function is used to return the initial state of a component. In our case, returning the number `0`.

This function is used when the component is first rendered and on all future actions that occur, the `update` function is used to update the component's state.

##### Update

```javascript
export function update (state = init(), action = {}) {
  switch (action.type) {
    case INCREMENT: return state + 1;
    case DECREMENT: return state - 1;
    default: return state;
  }
}
```

The `update` function is called each time an action occurs and is responsible of taking a look at the action and deciding whether the component's state needs to be updated in response to the action or not. If a change is required, it returns the updated state.

The decision tree for our counter can be seen in the switch statement. There are three possible outcomes whenever an action is dispatched in our application:

1. The incoming action's type property matches the `INCREMENT` action type, then add `1` to the current state of the counter.
2. The action.type matches the `DECREMENT` action type, then subtract `1` from the current state of the counter.
3. The incoming action's type is something other than `INCREMENT` and `DECREMENT` and we don't care about it, so we just return the previous state.

##### View

```javascript
export function view ({ state, dispatch }) {
  // Click event handlers
  const dispatchIncrementAction = (event) => dispatch({ type: INCREMENT });
  const dispatchDecrementAction = (event) => dispatch({ type: DECREMENT });

  // Render
  return (
    <div>
      <button onClick={dispatchDecrementAction}>-</button>
      <span style={{ padding: '4px 12px' }}>{state}</span>
      <button onClick={dispatchIncrementAction}>+</button>
    </div>
  );
}
```
Similar to the view for our `FancyGreeting` component, the counter's view also receives a prop object and it expects it to have two properties:
* `state` which is the current state of the component as a result of our init/update functions.
* `dispatch` which should be a function

At the top of the counter's view we create two event handler functions, corresponding to each button. Whenever a button is clicked, we call the `dispatch` function with an object with a `type` property. This object is called an `action`. It is these objects that will be passed to our update function as the second argument.

The rest of the view is self-apparent; we create two buttons with their matching event handlers. We also render a `span` element which to display the current state.

### Recap

If you are new to elm/flux/redux/etc architecture, then you were just introduced to a lot of new concepts. This can be a lot to take in. Take your time and review the full `counter.js` file again. There is a certain flow to this pattern which you can try to follow. I.e.

> init() ---> view with initial state ---> dispatch(action) ---> update() ---> view with updated state ...

Additionally, so far these tutorials have intentionally avoided using some of the helpers that `relm` provides to make the above work easier. This is so that you can get an understanding the fundamentals.

Over the next few tutorials, we will start introducing those helpers which will reduce the work required to implement the above pattern.

### Bootstrap

Similar to example 2, we need to pass props to our `Counter.view`, specifically, we need to pass `state` and `dispatch`. However, unlike example 2, we don't need to create a wrapper component. `state` and `dispatch` also happen to be the two props that startApp passes to the top level components. So, our `index.js` simply looks like this:

```javascript
import { startApp } from 'relm/react-dom';
import * as Counter from './counter';

const container = document.createElement('div');
document.body.appendChild(container);

// Start app will initial the counter state,
// and then call Counter.view with a props object
// which has `state` and `dispatch` properties
startApp(container, Counter);
```

### Finishing up

As usual run `npm run build` in the example's directory and see your results.
