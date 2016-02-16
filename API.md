# relm API

relm is separated into small packages which are all delivered together (i.e. all you need to do is `npm install relm`). The packages can be accessed by relative path from the core package (i.e. `relm/react-dom`, `relm/ui`). The purpose of this is to keep library size manageable while also providing an integrated feature set.

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


## CLI / Build process

### relm-compile

Defined as scripts in your `package.json`:

```json
"scripts": {
  "build": "relm-compile",
  "watch": "relm-compile --watch",
},
"relm-compile-settings": {

}
```

Run from the command line using npm:

```shell
npm run build
# or
npm run watch
```

__Flags__

* `watch`: Run the compile process in watch mode on a local development server; the result can be seen by visiting the server url (usually `localhost:8080`) and the browser window auto-refreshes on source code changes
* `hot`: Run the development server in hot mode, so that the full page is not refreshed on change

__Settings__

* `entry (String)`: Path to your entry file (i.e where you call startApp); default is `./index.js`
* `outputDir (String)`: Directory where the compiled files are saved relative to the project folder; default is `./build`
* `pageTitle (String)`: Title of your application; defaults to project name from package.json


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
