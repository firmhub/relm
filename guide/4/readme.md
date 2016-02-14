# Say my name
> __relm guide__: Tutorial no. 4 - Nested components

So far in this guide, we have been creating solitary components since our requirements have been very simple. In order to write more complex applications in a manageable way, you will need to make components which contain other components, which may contain other components. This is where the patterns introduced so far will start to pay dividends.

In `relm`, parent components, i.e. components which use other components have 3 responsibilities:

1. Store the state of the children components, in their own state. This also means, calling `Child.init` where necessary to initialize the child.
2. Update child state when a child action occurs using `Child.update` function
3. Pass the the child's `state` and a `dispatch` function to `Child.view`    

Again, all this work will be made easier in future tutorials, for now, let's see the fundamentals in practice.

Note: This is also where the `relm` approach starts to differ from the approach in `redux` or `flux`. `relm` components and state mutations are __composed up__, whereas `redux` has a top down approach. If you are interested, you can [read about the differences](#TODO).


### Component

Enough talk, the component we are building will be a `form` that will use both of the components `Textbox` and `FancyGreeting` which we have created in previous examples. Those components are completely unchanged from our previous examples, so let's go through the new file `fancy-form.js`:

##### Action types

```javascript
const TEXTBOX_ACTION = 'form/textbox_action';
```

The `FancyForm` component will not have any internal state, however, since it will be storing and updating state of a `Textbox`, it will need an action type to identify that action. That is being created above.

##### Init

```javascript
export function init () {
  return {
    name: Textbox.init()
  };
}
```

The `FancyForm`'s state will be an object with a property `name` where we will store the `Textbox` state.

##### Update

```javascript
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

```

We still only need to worry about one action (`TEXTBOX_ACTION`) so our update function has a single conditional (a switch statement in this case).

What has also changed is how we handle the state update.  Instead of doing the mutation to the `Textbox` state ourselves, we are instead passing the previous state and the action `payload` to the `Textbox.update` function.

As you can see the logic for making nested updates remains in the child component (in this case, `Textbox`, and the parent simply stores the state and call the child methods when needed.

##### View

As with the other sections above, nesting a component has added some complexity to our view as well. Let's see what is going on:

```javascript
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
```
At the top of our view, we are defining a function called `handleTextboxAction`, which we pass to `Textbox.view` as the `dispatch` prop. It functions as a go-between. When it receives an action, it is wrapped and turned into a `TEXTBOX_ACTION` and dispatched for real.  

The view itself is simple enough. Note that in addition to passing `state.name` to `Textbox.view`, we also pass it to `FancyGreeting.view`. This is a key reason why the state for child components is stored inside the parent. The child is in charge of manipulating the state, but the parent is in charge of distributing it. In this case, we are distributing to two components and those two components will remain in sync.

### Bootstrap

The bootstrap file `index.js` is mostly unchanged. The `FancyForm` is now our top level component instead of `Textbox` in the previous example.

Additionally, notice that we added a default export to our `FancyForm` file which leads to a simpler import statement below.

```javascript
// Simpler component import instead of import * as ...
import FancyForm from './fancy-form';
```

### Finishing up

Run `npm run build` to see your build and see the results of your hard work. I hope you are still with me. See you in the next example where we will start making things easier for ourselves.
