# Let's stay together
> __relm guide__: Tutorial no. 9 - Combining components

This will be a relatively short tutorial as we will be introducing a small helper called `combineComponents`. This helper tries to reduce the work involved in initializing, updating, and managing state of multiple stateful components. As combining multiple components will be done often as you build your app, the helper will come in handy. Let's see how it works.

We are going to start building a login form in this tutorial. We will use `combineComponents` to get all the pieces together but will not make it functional. That will be done in the next tutorial.

### LoginForm

Of the components being combined, `UsernameTextbox` and `Textbox` are unchanged from previous tutorials. We have created a new component called `Checkbox` which you can see in `checkbox.js`. It is simple enough, so review that if you like. We will only discuss what is going inside LoginForm as that is the most interesting.

At the top of `login-form.js` file we see the following:

```javascript
const LoginFields = relm.combineComponents('LoginFields', [
  UsernameTextbox,
  Textbox,
  Checkbox,
]);
```
We call `combineComponents` with two arguments:

1. displayName (String): As usual this is used internally for debugging and other purposes.
2. components (Array): This is an array of all the components you would like to combine. The location of the components within this array is important so keep that in mind.

Our login form will require three field, a username, a password and checkbox indicating whether to store the login info in a cookie. Each of those are included in that same order in the array passed to `combineComponents`. If we needed more textboxes, for instance, we would simple add them to the array.

You can read about how this works in the [API documentation of combineComponents](#TODO) but the gist is that the returned component will automatically `init` and `update` all child components. It will also propagate the state and dispatch to each component either from the `view` or with another method `with` which we see below.

Since the all the stateful components being used in our `LoginForm` have been combined into `LoginFields`, we use the `LoginFields.init` and `LoginFields.update` as the form's `init` and `update` functions.

In the `LoginForm.view`, the following line is important:

```javascript
const [ Username, Password, RememberMe ] = LoginFields.with({
  state: props.state,
  dispatch: props.dispatch
});
```
We are provide state and dispatch to `LoginFields.with` method and we get back an array of components which can be used in the view. These components have their state and dispatch properties pre-applied so we no longer have to provide those manually and we can use these components like this:

```javascript
<Username label='Username' placeholder='Your github username' />
<Password label='Password' type='password' />
<RememberMe label='Remember me' />
```

You can see how this really cleans up the view and reduces much of the boilerplate required for using multiple stateful components.

## Recap

We used the `combineComponents` helper in our `LoginForm` to help combine three stateful components into one. In the next tutorial we will make the form functional, i.e. make the submit button do something.
