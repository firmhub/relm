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

### UsernameTextbox

In this file, we have removed our `checkable` function from the previous example and instead we are using the `checkable` function provided by `relm/ui`. This function is very similar to what we had before, just with more features, which we will see below.

First let's see how our validate function has changed:

```javascript
validate (username, done) {
  // Perform basic validation
  if (!username) {
    return done({ warning: 'Username is required' });
  }

  if (username.length < minLength) {
    return done({ error: 'Username is too short (minimum 5 characters)' });
  }

  // Now for some more advanced stuff; check github
  // to see if username exists
  const req = request
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

  return function cancel () {
    req.abort();
  };
}
```
The top part of the function is the same, in that we still receive the textbox state as our first argument, but to mark our validation function as being asynchronous, we now declare a second argument `done` which let's relm know to ignore the function's return value and instead wait for anything we provide to the `done` callback.

In the validation function after the basic validation passes, we use the `superagent` library to make a request to `api.github.com` (for demonstration purposes, you can use your own backend) to verify that the user exists. Then based on the response, we call `done` again with the appropriate validation state object.

Two more things to note here:

1. Our validation result can be any object; it is not limited to errors and warnings. In this case, we store the `fullName` of the user as provided by github; we later use this property in our `fancy-form` view to display the user's name once validated as such:
```javascript
  <FancyGreeting
    name={state.validationState.fullName || state.childState}
    styles={{ heading: styles.greeting }}
  />
```
2. The return value from an async validate function is a cancel function. `checkable` will call this function if the state changes before the request completes. In this case, we use this function to cancel our request to the api.

### checkable async implementation

Above we say how an async validator works, but we still need to know how the async state changes are handled. You can see the implmentation in [`src/ui/checkable`](#TODO). Internally when `checkable` receives an async validate function, it creates two action types `UPDATED` and `VALIDATED` and their corresponding action creators.

* `UPDATED` is used to indicate that the child state updated and we should make a validate request
* `VALIDATED` indicates that a response to the validation request was received

This is what the action creators look like:

```javascript
function $UPDATED (dispatch, state, action) {
  const { childState, validationState } = state;

  // Get the updated value and see if it has changed
  const updatedState = child.update(childState, action);
  if (updatedState === childState) return;

  // Abort previous request, if pending
  const previous = pending.get(validationState.request);
  if (previous && _.isFunction(previous)) previous();

  // Create a unique reference for this request
  const request = { /* empty object */ };

  // Update the state
  dispatch({ type: UPDATED, childState: updatedState, request });

  // Validate the updated childState
  const done = dispatch.using($VALIDATED, request, updatedState);
  const cancel = validate(updatedState, done);

  // Save the request reference and cancel fn
  pending.set(request, cancel);
}

```
You can see all of the steps we have previously discussed. When the request completes, it is handled using `$VALIDATED` as follows:

```javascript
function $VALIDATED (request, checked, result = {}) {
  // Clear reference to completed request
  pending.delete(request);

  return {
    type: VALIDATED,
    checked,
    result,
  };
}
```
The `update` function is then responsible from updating the `childState` and `validatedState` as a response of these actions, as follows:

```javascript
update: {
  [UPDATED]: (state, { childState, request }) => ({
    childState,
    validationState: {
      ...state.validationState,
      isPending: true,
      isDirty: true,
      request
    }
  }),

  [VALIDATED]: (state, { checked, result }) => {
    // If validation finishes after another change
    // has already occured, we ignore it
    if (checked !== state.childState) return state;

    result.isPending = false;
    result.isDirty = true;

    return {
      childState: checked,
      validationState: result
    };
  }
},
```

### `dispatch.from`

The starting point for all of the above work is `$UPDATED`. Everytime it receives an action, it does a bunch of work and then calls `$VALIDATED` if needed. It is itsef used inside the `checkable`'s wrapped view as follows:

```javascript
view (props, ...args) {
  const { dispatch, state } = props;

  return child.view({
    ...props,
    state: state.childState,
    dispatch: dispatch.from($UPDATED, state)
  }, ...args);
}
```
The key item is the dispatch property that we are passing to our `child.view` (textbox in this case).

It uses a helper method `dispatch.from` to pass incoming actions to `$UPDATED`. `dispatch.from` works similar to `dispatch.using` which we have seen before but instead of dispatching the return values from the action creator, it passes `dispatch` to it directly and let's it dispatch actions asyncronously.

The above line is the same as writing the following (except some internal optimizations made by relm):

```javascript
  dispatch: (action) => $UPDATE(dispatch, state, action)
```

## Recap

That was a lot to cover, and hopefully looking at a practical example made the idea clear to you. Basically it boils down to this; when performing async work, dispatch an action to indicate start of the request and then dispatch an action indicating the end of it.

If this is still confusing for you, please feel free to make an issue in the github repo. This is a difficult concept and I don't know whether I have explained it well.
