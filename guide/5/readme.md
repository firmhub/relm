# Fewer plates in your boiler
> __relm guide__: Tutorial no. 5 - Component helpers

If you notice, so far in this guide we have not seen too many features provided by `relm` as a framework. In fact, we have only seen `startApp`, which we used in each tutorial to render our top level component into an element. Much of what we have seen has been the elm architecture pattern in just plain javascript. This has intentional to aid your learning and explain the steps involved.

In this chapter, we will start using some additional helpers provided in `relm` which will make writing components easier. In this folder, each of the components with which we have worked with previously have been updated to use some of these helpers.

Let's go through them one by one and see what is going on:

### FancyGreeting

In `fancy-greeting.js`, we encounter our first helper called `component` which we are importing in from the relm package. The `component` function does several things behind the scene and we will explain each of them as we go along.

First thing you will notice is that we are no longer exporting the view function, but instead we call our `component` helper with a name and an object which has the view function. This is the normal signature of the component function.

All components in `relm` created this way are named which is passed as the first parameter. Giving a component a name helps in case of errors, debugging, and is used internally by the component function. Try to make your component names unique and descriptive.

The second parameter we pass to the component function is an object with a view function (and also the init, update functions in case of stateful components).

Finally, notice we have an additional property called `styles`. We have simply moved the styles that were previously declared inside the view function, to the outside. The `component` helper will pass the `styles` object to the view as a prop. The benefit of doing this is that it allows a component styles to be overridden by the parent, if needed, and it also makes the the view function a bit cleaner.

### Textbox

There are a few changes inside `textbox.js`; similar to the `fancy-greeting` component, our textbox now accepts custom styles. We are again passing our init, update, and view functions to a `component` call instead of exporting them individually. We are also using arrow functions for init and view to make them look a little cleaner.

##### Action creator and `dispatch.using`

On top of the file, you will see we now have a function called `$CHANGE`. This function is called an `action creator`. An action creator's job is to encapsulate the logic required for creating action objects.

> The name of the function is completely up to you but I like to follow the convention of putting a `$` sign in from on the variable that represents my action type, so that it is clear what it is and I have to think of fewer names.  

In terms of what is going on inside the `$CHANGE` action creator, you can see that it is similar to what was happening previous inside the view, but now that logic is extracted out, which makes the action creator independently testable.

To actually turn this action creator into an event handler we use a helper called `dispatch.using`. Here is the relevant part of the view:

```javascript
<input
  onInput={dispatch.using($CHANGE)}
  type='text'
  value={state}
/>
```
dispatch.using is a helper function which will dispatch the return a function, our event handler, and when that is invoked, it wil pass the arguments to `$CHANGE`. It will then take the results which is our action object and dispatch it.

As our components become more complex, this will save us from writing repetitive code and make our views cleaner and more readable.

##### update

Next major change is that `update` property in our component is no longer declared as a function but instead it is now an object. Our `component` helper will take this object and turn in into a function while handling the boilerplate (i.e. calling init if state is undefined and simply returning state when there is no matching action type).

The keys for the `update` object are action types that we want to handle (in this case `CHANGE` only) and the values are functions. With the same (state, action) signature. The action in this case will always be of the respective type.

The `textbox` is a very simple component so there is not much of a difference, but in more complex components, using this pattern makes it easy to add action types and also keep their update handlers separated and testable.

### FancyForm

Finally in `fancy-form.js`, we are using all the helpers described above:

1. `component` is used to name and create our `FancyForm` component
2. The `styles` property is used to define some styles which the component uses in its view
3. Our `update` function is actually an object of action types and handlers instead of a function
4. `dispatch.using` is used along with a `$TEXTBOX_ACTION` action creator function to relay our nested textbox's actions

Two new things are also going on here:

##### helper for nested components

If you recall from the previous tutorial, our update function looked like this:

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

We have already seen above, that when providing `update` to the component helper we can instead write it using an object map as follows:

```javascript
export default component('FancyForm', {
  // ...
  update: {
    [TEXTBOX_ACTION]: (state, action) => ({
      name: Textbox.update(state.name, action.payload)
    })
  }
  // ...
});
```

We are basically passing all `TEXTBOX_ACTION`s to the `Textbox.update` function. Since these types of function will be very common when dealing with nested components, an additional helper is included which allows us to provide an object instead. So the above becomes:

```javascript
export default component('FancyForm', {
  // ...
  update: {
    [TEXTBOX_ACTION]: {
      statePath: ['name'],
      actionPath: ['payload'],
      updateHandler: Textbox.update
    }
  }
  // ...
});
```
We provide the path we want updated on the state, and the property where we saved the child action and the component's update function. A function is generated from this object that is basically the same as we wrote manually above.

The code is not much shorter than before but to me it looks a bit cleaner, especially when I am reading through multiple actions. The paths provided can deal with nested objects and arrays by just providing more items in the path arrays which is convenient.

Additionally, writing the handler in this way also takes care of copying the state object only when a change occurs, instead of every time.

### Recap

We have done a lot of refactoring using the helpers included in relm. They do quite a bit in terms of dealing with the repetitive areas, however, there is no way for them to be exhaustive. Hopefully, this tutorial has given you ideas about how to reduce boilerplate code and you can start writing your own helpers.

Next we will start adding some more functionality to our little application.
