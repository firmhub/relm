# Make it easier
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

There are a few changes inside `textbox.js`. Again we are passing our init, update, and view functions to a `component` call instead of exporting them individually. We are also using arrow functions for init and view to make them look a bit cleaner.
