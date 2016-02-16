# relm
Component based app architecture

## Getting started

__Step 1.__ In a new folder, create a `package.json` with the following:

```json
{
  "name": "your package name",
  "version": "1.0.0",
  "scripts": {
    "build": "relm-compile",
    "watch": "relm-compile --watch",
  },
  "dependencies": {
    "relm": "*"
  }
}
```
__Step 2.__ Then create an `index.js` file with the following:

```javascript
const HelloWorld = {
  view: () => (
    <h1>Hello world</h1>
  )
};

// Create an element which will contain our app
const container = document.createElement('div');

// Render the application in the target element
import { startApp } from 'relm/react-dom';
startApp(container, HelloWorld);

// Add the element that contains the app to the page
document.body.appendChild(container);

```
__Step 3.__ From the command line, go to the project directory and run the following:

```shell
npm install
npm run watch
```
Your application has been created; see it by opening the `http://localhost:8080/index.html` file in a browser.


## [Read the guide](./guide)

To learn about the architecture in step by step tutorials which have very low pre-requisites and take you from very simple beginner applications to more advanced scenarios.

# API reference

The relm api is separated into small packages which are all delivered together (i.e. all you need to do is `npm install relm`). The packages can be accessed by relative path from the core package (i.e. `relm/react-dom`, `relm/ui`). The purpose of this is to keep library size manageable while also providing an integrated feature set.

In order of importance:

* CLI / Build process
  * [relm-compile](#relm-compile)


* React
  * [startApp](#startApp-react-dom)


* Core
  * [component](#component)
  * [combineComponents](#combineComponents)


* UI
  * [checkable](#checkable)



## Core

### component

```javascript
import { component } from 'relm';
component(name, definition);
```

Creates a relm component from a given definition object. Applies defaults as needed and has integrated helpers ([see guide on helpers](./guide/5)).

__Arguments__

1. `name (String)`: Display name of the component
2. `definition (Object)`: An object containing the following:
  - `view (Function)`: A function which accepts props and children and returns the virtual dom output. Effectively the same as a react pure component.
  - `init (Function)` _Optional_: Function to initialize the component's local state (default = void)
  - `update (Function|Object)` _Optional_: A reducer function which takes a state and action and returns updated state __or__ an object with keys as action types and values as functions which update state based on those actions (default = identity)
  - `styles (Object)` _Optional_: Object with keys as arbitrary element names and object values represeting camel-cased css styles. Ex: `{ someElement: { borderRadius: '2px' }, ... }` (default = {})
  - `classes (Object)` _Optional_: Defined the same way as styles but these are processed through `jss` and provided to the component's view as string values (default = {})

__Returns__

`(Object)`: An object will all the properties described above (including defaults). The `view` function is wrapped and `update` is converted to a function if it was defined as an object.

### combineComponents

```javascript
import { combineComponents } from 'relm';
combineComponents(name, sources);
```

Combines multiple relm components into one by combining the `init` and `update` functions internally. Also provides a default `view` which renders each component in the same order it was included in the sources array.

Additionally, a `with` method is provided to return components with partially applied `state` and `dispach` props, so they can be arbitrarily in another view.

[See tutorial on combining components](./guide/9)

__Arguments__

1. `name (String)`: Display name of the combined component
2. `sources (Array)`: A list of components to be combined. Duplicate components can be included if you need to manage the state of multiple copies (ex: multiple textboxes in a form)

__Returns__

`(Object)`: A relm component with an additional `with` method

## React

### startApp (react-dom)

```javascript
import { startApp } from 'relm/react-dom';
startApp(element, component);
```

Renders a relm component using `react-dom` into the provided element. Internally creates a state store and re-renders on all state changes.

Generally the provided element should not be the document `body` as that may replace hidden elements such as `<script>` tags in the body; instead use an element inside the document body which you know is empty.

[See hello world tutorial on how to use startApp](./guide/1)

__Arguments__

1. `element (DOMElement)`: Any element where you want to render the app
2. `component (Object)`: Top-level relm component representing your application

__Returns__

`(Object)`: An "app" object with the following methods:
  * `getState(): Any`: Returns the latest application state
  * `subscribeState(subscriber: Function): Void`: Calls the subscriber each time that the application state changes
  * `dispatchAction(action: Object): Void`: Dispatches an action to your top-level component
  * `hotReload(component: Object): Void`: Replaces the top-level component with the provided component. Useful in development for hot reloading

## UI

### checkable

```javascript
import { checkable } from 'relm/ui';
checkable(name, component, config);
```
Wraps a component and allows its state to be validated on each change.

__Arguments__

1. `name (String)`: Display name of the resulting component
2. `component (Object)`: The component being wrapped
3. `config (Object)`: An object with the following properties:
  * `validate (Function)`: A function with either of these two signatures:
    * `(state) => validationState` [see tutorial on synchronous validation](./guide/7)
    * `(state, callback) => cancelFunction` [see tutorial on asynchronous validation](./guide/8)
  * `delay (Number)` _Optional_: Throttle the calls to validate function by this amount (in milliseconds)
  * `resultPath (String[])` _Optional_: Path at which to include the validation state in the wrapped components props

__Returns__

`(Object)`: A relm component

# Roadmap to 1.0

Please have a look at these linked issues; I need feedback for most and help with some of them so if you are interested in something, please leave a comment.

- [ ] Testing #5
- [ ] Routing #6
- [ ] More helpers #4
- [ ] Performance / memory optimizations #7
- [ ] It's 2016, the readmes need more gifs

# Contributions

If you are interested in contributing, please request to be assigned on any open issues or start an issue if one does not exist.

This is my first major open source project and I am hoping to learn from the community. This is not a dictatorship; anybody making significant contributions can be added as a contributor.
