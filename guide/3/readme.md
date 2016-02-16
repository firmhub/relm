# State of trance
> __relm guide__ \ Tutorial no. 3 - Component state

In the the previous example, we created a component `FancyGreeting`, which received from its parent component, bits of information (`props`) that changed the way how the output looked and what message it displayed. In this example, we will introduce the concept of component `state` which is information that the component maintains internally.

For example, if we were writing a form component, the values entered by a user in the form will be the form's internal state.

To show how to write these stateful components, we will start just with a `textbox` component which stores its own state. In following tutorials, we utilize this component.

### Component

Relm components follow [the elm architecture pattern](#TODO) for state management. This patterns has a lot of benefits for managing application state but there are also a few concepts that need to be introduced.

At a high level there are three functions, `init`, `update` and `view`. These functions work in the following pattern to manage a component's local state:

[[../diagrams/state-architecture.png]]

Have a glance at the code in `textbox.js` file. We will start working our way through the file and discuss each section.

##### Action types

```javascript
const CHANGE = 'input-control/change';
```

If you are not familiar with `flux` style architecture patterns, the first thing to understand is that an application's state is never changed directly. State is only change in one way and that is to define some `action` types and define how state should be updated when a particular action comes through the store. It is the store's responsibility to change the state. This leads to very predictable applications and also if we ever get into a bad state, you know exactly which action caused it.

In practical terms, actions are simply JavaScript objects which have a `type` property. An action type is just a string which will allow us to  These correspond to the number of ways the state of our component can change. In this case, we are only interest in the text in an input box being updated so we have a single action type defined.

I use the following format for my types to avoid conflicts all together and maintain consistency in my codebase (and these examples):

`<component name>/<action name>`

If you are familiar with `redux`, action types in `relm` are generally not exported from a module as they are rarely needed outside of a component. They still need to be unique but in case of conflicts, the change is generally in one place only.

##### Init

```javascript
export function init (value = '') {
  return value;
}
```

The `init` function is used to return the initial state of a component. In our case, we are starting out with an empty value or any value that is passed into our init function.

##### Update

```javascript
export function update (state = init(), action = {}) {
  if (action.type === CHANGE) return action.value;
  return state;
}
```

The `update` function is called each time an `action` occurs and is responsible of taking a look at the action and deciding whether the component's state needs to be updated in response to the action or not. If a change is required, it returns the updated state.

The decision tree for our textbox is simple as there is only one action in which we are interested. That action is `CHANGE`; if we receive his action, we update the state to the value defined in the action, otherwise, we keep the current state value.

##### View

```javascript
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
```
`Textbox`'s view contains an input element with a label. The value of the input is whatever we receive in props. We are also attaching an event handler to the input (`onInput`) event, which then dispatches a `CHANGE` action with the latest value from the input box.

For now, we are also displaying the `state` in the label, so that you can see the changes in the input are being reflected in the application.

### Recap

If you are new to elm/flux/redux/etc architecture, then you were just introduced to a lot of new concepts. This can be a lot to take in. Take your time and review the full `textbox.js` file again. There is a certain flow to this pattern which you can try to follow. I.e.

> init() ---> view with initial state ---> dispatch(action) ---> update() ---> view with updated state ...


### Bootstrap

Similar to example 2, we need to pass props to our `Textbox.view`, specifically, we need to pass `state` and `dispatch`. However, unlike example 2, we don't need to create a wrapper component. `state` and `dispatch` also happen to be the two props that `startApp` passes to the top level components. So, our `index.js` simply looks like this:

```javascript
import { startApp } from 'relm/react-dom';
import * as Textbox from './textbox';

const container = document.createElement('div');
document.body.appendChild(container);

// Start app will initialize the textbox state,
// and then call Textbox.view with a props object
// which has `state` and `dispatch` properties
startApp(container, Textbox);
```

### Finishing up

As usual run `npm run build` in the example's directory and see your results.
