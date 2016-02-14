# Getting higher will improve your life
> __relm guide__: Tutorial no. 7 - Higher order components

Higher-order components are components which wrap another component in some additional functionality and return a new and improved component. They have many uses, one of which is extracting out some functionality that needs to be repeated in several places and centralizing it. In this example, we will be dealing with input validation.

Specifically, we will take our textbox component from previous examples and validate its state (which is just the text that is entered in it) using a higher-order component creator called `checkable`. Let's see how to accomplish that:

### Textbox

The first thing we have changed is our `Textbox` component to accept some additional props, as follows:

* error (String): If this string is provided, the textbox will display a __red__ message
* warning (String): If this string is provided, the textbox will display an __orange__ message
* isDirty (Boolean): Since we don't want either error or warning displayed right off the bat, i.e. before the user has entered anything, we will check this value before displaying either message

Finally, if the textbox has been edited and no error or warning is provided, then an `Ok` message is displayed above it in __green__.

Have a look at the changes in `textbox.js`. The above messages are displayed or hidden using some helper function. In addition to the above, we have added some styles to the component.

The `init` and `update` functions are unchanged. The above changes are simply based on the props being provided to the textbox.

### UsernameTextbox

This is our higher order component; at the bottom of the file, you can see that we are creating it using a function called `checkable` and then exporting the result. The function `checkable`, defined at the top of the file, accepts the following arguments:

1. A display name
2. The child component we want to wrap
3. An options object with a validate function

Take a look at the implementation. It should be straight forward, with the most interesting work happening in the `update` function:

```javascript
const updatedChildState = child.update(state.childState, action);

// No change
if (updatedChildState === state.childState) return state;

// Child state changed so re-validate it
const validationResult = validate(updatedChildState) || {};

return {
  childState: updatedChildState,
  validationState: {
    ...validationResult,
    isDirty: true
  }
};
```

Whenever our wrapper component receives an action, it passes it on to the child's update function. Everytime the child's state changes, it calls he provided validate function and then stores the updated `childState` and `validationState` and makes `isDirty=true`.

Then the view's job is to pass all of these props to the child components, along with any other props that are received from the parent.

Now have a look at the `validate` function that we provide to `checkable`:

```javascript
validate (username) {
  if (!username) {
    return { warning: 'Username is required' };
  }

  const minLength = 3;
  if (username.length < minLength) {
    return { error: `Username is too short (need minimum ${minLength} characters)` };
  }
}
```

It is a simple function that accepts one argument and that is the state of the wrapped component, in this case our textbox's state which is simply a string representing a username.

We perform our checks and return an `object` with either a warning or error. This object will become our updated validation state. That's it.

### FancyForm

There are some small changes in the fancy form, namely we are importing `UsernameTextbox` instead of our plain vanilla `Textbox` and also since it is the only one stateful component in our form, we are just using it's `init` and `update` functions directly instead of wrapping them as we previously did.

## Recap

We created a function called `checkable` that helped us wrap a textbox to create a validated textbox. Run the example and type a short username, you will see an error. If you clear the textbox, you will see a warning.
