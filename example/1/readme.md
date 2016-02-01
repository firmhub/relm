# Saying hello
Learn __relm__ by example - No. 1

In this example we will be using the relm framework to render a basic message on a page. We will be introducing two concepts in order to do that; a concept of relm __components__ which will contain our application's view and a __bootstrap__ step where we render that view onto the page.

### Component

The first concept is a __component__. In relm, at the very minimum a component is an object that has a view method. Here is what our hello world component looks like:

```javascript
export function view () {
  return (
    <h1>Hello world</h1>
  );
}
```
The above component is written using `react` and `jsx` which should be familiar to you from [the introduction](#TODO). The `hello-world.js` file simply exports a function named view which when called returns a message inside a `h1` heading tag.

### Bootstrap

In the section above, we wrote our application's view, but we have not done anything with it. It will still not display on our webpage. In order to do that, we need to hook the application into the webpage.

In relm, we use a function called `startApp` in order to do that. Depending on the view library that your components are written in, the startApp function can be imported as follows:

```javascript
import { startApp } from 'relm/react-dom';
```
Since we are using `react` as our view layer and we will be rendering the app to a webpage, we use the startApp function from the `relm/react-dom` module.

Now let's use it and render our component; here all the code from our `index.js` file:
```javascript
import { startApp } from 'relm/react-dom';

// Let's get our component
import * as HelloWorld from './hello-world';

// Create a webpage element which will contain our app
const container = document.createElement('div');

// Render the application in the element we just created
startApp(container, HelloWorld);

// Add the element that contains the app to the page
document.body.appendChild(container);
```
Let's recap what we have done so far. We created a component with a view method and saved it in our `hello-world.js` file. Then we created an `index.js` file which renders our component to our webpage document inside a `div` element.

### Finishing up

Now that we have our application and our kickoff, let's setup our `npm` build process so we can see the results. First we need to create a `package.json`:
```json
{
  "name": "hello-world",
  "scripts": {
    "build": "relm-compile"
  },
  "dependencies": {
    "relm": "*"
  }
}
```
If you are not familiar with `npm` or why `package.json` is needed, read [the introduction](#TODO).

Your project folder should now have the following files:
```
~/your-project-folder
  - hello-world.js
  - index.js
  - package.json
```

Let's install our dependency by running the following command in our terminal:

> npm install

Notice that we created a script called `build` in our `package.json` above, which will instruct relm to compile our page. Let's run that:

> npm run build

This will create a new folder called `build` inside the project folder which will contain an `index.html` file and a bundled javascript file. Open `index.html` in a browser to see the results of your hard work so far.
