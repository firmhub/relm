# Some things take time
> __relm guide__: Tutorial no. 8 - Async actions

So far throughout this guide, we have only dealt with simple synchronous actions; meaning we make a change and it has effect right away and we do not have to deal with delays, blocking, etc. In real applications, this will not often be the case; we will often have to request information from the server, send it over http and wait for a response and then update our app.

These types of calls, called asynchronous or async calls bring their on complexity, but here is the gist of how they are handled in relm, step by step:

1. request is made - we dispatch an action indicating we started a request; the state is updated to say a request is pending (for example, to show a loading icon)
2. we wait for the response - nothing to do
3. request comes back positive - we dispatch an action to update our state with the response
4. request is a failure - we dispatch an action to update our state with an error message or some other indication

The idea is that each step should be represented by a separate action which may or may not have an impact on our application.

To demonstrate an async call, we will updating our `UsernameTextbox`. We can imagine that we may need to use this textbox on a login screen. Let's say when a user enters his username, we want to check if the user exists. If he does, then we display his full name to greet him and if not, we show an error message.

Before you continue, please make sure you understand the synchronous implementation of our `checkable` function from the previous tutorial.

### UsernameTextbox

Most of the changes in this tutorial are in the `username-textbox` file, so we will cover that in sections. First let's see how our validate function has changed:

```javascript
validate (username, done) {
  if (!username) {
    // Note: done needs to be called with the validation result
    return done({
      warning: 'Username is required'
    });
  }

  const minLength = 5;
  if (username.length < minLength) {
    // Note: done called here as well
    return done({
      error: `Username is too short (need minimum ${minLength} characters)`
    });
  }

  // Now for some more advanced stuff; check github
  // to see if username exists
  request
    .get(`https://api.github.com/users/${username}`)
    .end(function handleResponse (err, res) {
      if (err) {
        // If a 404 error, then we have a special error message
        if (res.notFound) return done({ error: 'Username not found' });

        // For all other errors, show generic error message
        return done({ error: res.statusText || err.message });
      }

      // No error, means a username exists
      done({ fullName: res.body.name });
    });
}
```
The top part of the function is the same, in that we still receive the textbox state as our first argument, but to mark our validation function as being asynchronous, we now declare a second argument `done` which let's relm know to ignore the function's return value and instead wait for anything we provide to the `done` callback.

In the validation function after the basic validation passes, we use the `superagent` library to make an http request to `api.github.com` (for demonstration purposes we will assume that if a user exists on github, he is considered valid). Based on the response from github, we call `done` with the appropriate validation object.

Two more things to note here:

1. Our validation result can be any object; it is not limited to errors and warnings. In this case, we store the `fullName` of the user as provided by github; we later use this property in our `fancy-form` view to display the user's name once validated as such:
```javascript
  <FancyGreeting
    name={state.validationState.fullName || state.childState}
    styles={{ heading: styles.greeting }}
  />
```
2. The return value from an async validate function is a cancel function. `checkable` will call this function if the state changes before the request completes. In this case, we use this function to cancel our request to the api.

### checkable function

In the asynchronous version of our `checkable` function we need multiple
actions so we have some action types defined at the top:

* `UPDATE` is used to indicate that the child state updated and we should make a validate request
* `VALIDATE` indicates that a response to the validation request was received

This is what the action creators look like:

```javascript
function $UPDATE (dispatch, state, action) {
  // Who says child.update() has to be called inside our update()
  // function; we can call it earlier if we need to; like we do in
  // this case
  const updatedState = child.update(state.childState, action);
  if (updatedState === state.childState) return state;

  // Dispatch actions as needed here. Since we do not want the
  // user interface to block while the validate function runs,
  // we update the state before running the function
  dispatch({ type: UPDATE, updatedState });

  // Create the callback function we will provide to the validator
  // We partially bind the updated state, since we can match
  // the validation results to the state that was checked
  const callbackFn = dispatch.using($VALIDATE, updatedState);

  // Let's call our user provided validation with our
  // callback as second argument
  opts.validate(updatedState, callbackFn);
}
```

When the request completes, it is handled using `$VALIDATE` as follows:

```javascript
function $VALIDATE (checkedState, validationResult) {
  // $VALIDATE is a simple action creator so we just
  // return the action object
  return {
    type: VALIDATE,
    checkedState,
    validationResult
  };
}
```

The `update` function is then responsible from updating the `childState` and `validatedState` as a response of these actions, as follows:

```javascript
update: {
  [UPDATE]: (state, action) => ({
    ...state,
    childState: action.updatedState,
    validationState: { ...state.validationState, isDirty: true }
  }),

  [VALIDATE]: (state, action) => {
    const { checkedState, validationResult } = action;

    // Since $VALIDATE is called asynchronously, it means
    // that state could have been modified since we made our
    // request. This is why we check; if we find a mismatch
    // then we ignore this result
    if (state.childState !== checkedState) return state;

    return {
      ...state,
      validationState: { ...validationResult, isDirty: true }
    };
  }
}
```

The only other change that is left now is in the `view` where we wire this whole chain up using a new helper `dispatch.from`:

```javascript
const childProps = {
  // Same as previous example
  ...validationState,
  ...props,
  state: childState,

  // dispatch.from() means actions will be dispatched
  // from the $UPDATE action creator directly rather than using
  // the result of $UPDATE. We partially bind state so we
  // can use it inside the $UPDATE function
  dispatch: dispatch.from($UPDATE, state)
};
```

As you can see, the semantics of `dispatch.from` helper used above are similar to `dispatch.using` but it is more flexible. The action handler passed to `dispatch.from` has access to the `dispatch` directly so it can dispatch actions syncronously and asynchronously.

The above line is the same as writing the following (except some internal optimizations made by relm):

```javascript
  dispatch: (action) => $UPDATE(dispatch, state, action)
```

### FancyForm

There is a small change in the `fancy-form.js` file so we can display the full name of the user when a match exists, instead of just the typed in name. The revised fancy greeting tag looks like this:

```javascript
  <FancyGreeting
    name={state.validationState.fullName || state.childState}
    styles={{ heading: styles.greeting }}
  />
```

In the `name` prop, we pass in the `fullName` when available.

## Recap

That was a lot to cover, and hopefully looking at a practical example made the idea clear to you. Basically it boils down to this; when performing async work, dispatch an action to indicate start of the request and then dispatch an action indicating the end of it.

As has been the them of these tutorials, we have done all of this work as manually as possible. As we go through the rest of the guide, more helpers will be introduced to help streamline the process as much as possible. In fact, there is a `checkable` function available in the `relm/ui` package that does everything we built in this and the previous tutorial plus some additional features. You can read the [API documentation for `checkable` here](#TODO).

Now, to test out your hard work, open the example and enter a valid github username into the textbox. After a short delay, you will see the textbox get marked as `OK` and the full name (if provided) of the user will be displayed.
