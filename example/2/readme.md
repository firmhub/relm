__relm__ guide - Tutorial no. 2
# Saying howdy

In the previous example we learned how to display a message on our page. There was nothing fancy about it. Let's add some style to it, and also since we may want to re-use the component in several places within our application, we will make the displayed message configurable.

### Component

The view for our new component is in the file called `fancy-greeting.js` and it is as follows:

```javascript
export function view (props) {
  // Here we are defining the new fancy
  // style we want our title to have
  const fancy = {
    fontFamily: 'Impact',
    fontSize: '4rem',
    textAlign: 'center',
    textShadow: '5px 5px 0px #ddd',

    // If a color is provided by the parent
    // then we use that color, otherwise, the
    // the greeting will be in red
    color: props.color || 'red',
  };

  // Apply the style to the h1 heading and
  // also set the text for the heading based
  // the name provided in props (or defaulting
  // to "Howdy stranger!")
  return (
    <h1 style={fancy}>
      Howdy {props.name || 'stranger'}!
    </h1>
  );
}

```
The main change in the above view function from the previous example is that the function is now receiving an object called `props` as its first argument from which it reads two properties `color` and `name`. Using this information, it returns the view contents instead of always returns the same message.

So anytime we want to render this component, we need to provide the `props` object. This is similar to how pure components work in React, and we will look at those similarties in later tutorials.

### Bootstrap

Let's take a look at our `index.js` file to see the changes we need to make to render this updated component:

```javascript
import { startApp } from 'relm/react-dom';

// No practical change here; just a different filename
import * as FancyGreeting from './fancy-greeting';

const container = document.createElement('div');

// Here we create a wrapper component so
// that we can pass some props to our
// FancyGreeting component
const Wrapper = {
  view () {
    return (
      // Create a react element using the
      // FancyGreeting's view; notice we are
      // not passing the full component to react;
      // just the view function plus the props we
      // want to pass
      <FancyGreeting.view name={'Bob'} />
    );
  }
};

// We start the app with the wrapper as our
// top level component instead of FancyGreeting
startApp(container, Wrapper);

document.body.appendChild(container);
```
Let's discuss what is going on inside the Wrapper's view function. The `jsx` element `<FancyGreeting.view name={'Bob'} />` will compile into the following javascript:

```javascript
FancyGreeting.view({ name: 'Bob' });
```
It is basically just a function call with an object as the first argument. This bit of explanation is necessary since we are using jsx to write our examples. If we were not using jsx, or for example we were using `mithril` as our view layer, then we would simply write out the function call ourselves.

To recap, we call the `FancyGreeting.view` function with an object and it returns the view contents. These contents are then get rendered from insider our `Wrapper`.

### Finishing up

There are no changes in the compilation or the package.json from the previous step, so just run `npm run build` and see your results.
