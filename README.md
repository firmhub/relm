# relm
Component based application architecture

## Getting started

__Step 1.__ In a new folder, create a `package.json` with the following:

```json
{
  "name": "HelloWorld",
  "version": "1.0.0",
  "scripts": {
    "build": "relm-compile",
    "watch": "relm-compile --watch"
  },
  "dependencies": {
    "relm": "*"
  }
}
```
__Step 2.__ Then create an `index.js` file with the following:

```javascript
// A relm component at its most basic is an object with a view function
const HelloWorld = {
  view: () => (
    <h1>Hello world</h1>
  )
};

// Create an element which will contain our application
const container = document.createElement('div');
document.body.appendChild(container);

// Render the application in the target element
import { startApp } from 'relm/react-dom';
startApp(container, HelloWorld);

```
__Step 3.__ From the command line, go to the project directory and run the following:

```shell
npm install
npm run watch
```
Your application has been started in development mode; preview it by opening `http://localhost:8080/` in a browser.

## Features

This project basically serves as overall integration and glue between a number of technologies. Relm itself is more pattern than it is functionality. Here is what it brings to the table:

* Relm components are largely self contained; the component's state, template, and styles can all be managed in one file
* Component views are stateless, pure functions; `react` is supported and `mithril` support is being considered (issue #4)
* Components state is defined and managed in the [elm architecture pattern](https://github.com/evancz/elm-architecture-tutorial) with some additional features and ideas
  * Components' local state is managed as a tree, so complexity is limited to a component's own state and the state of its parents    
  * Components remain flexible and can be easily modified by their parents
* Integrated build pipeline `relm-compile`:
  * Uses `webpack` internally; can be replaced if your needs outgrow what is provided
  *	Automatically pulls in dependencies such as `react`, `react-dom`
  * Transpiles ES2015/JSX code using `babel`
  * Command line tool  is used for configuring the build pipeline
  * Integrated development server
    * Includes `redux-devtools` automatically
    * Hot module replacement with the `--hot` flag
* `eslint` configurations are included for convenience

## [Read the guide](./guide)

To learn about the architecture in step by step tutorials which have very low pre-requisites and take you from very simple beginner applications to more advanced scenarios.

## [API reference](./API.md)

 Slightly more to-the-point technical documentation of relm's various packages and functions.

## Contributions

If you are interested in contributing, please request to be assigned on any open issues or start an issue if one does not exist.

This is my first major open source project and I am hoping to learn from the community. This is not a dictatorship; anybody making significant contributions can be added as a contributor.

## Roadmap to 1.0

Please have a look at these linked issues; I need feedback for most and help with some of these issues, so if you are interested in contributing or adding to the discussion, please leave a comment in the corresponding issue.

- [ ] Testing - issue #5
- [ ] Routing - issue #6
- [ ] More helpers - issue #4
- [ ] Performance / memory optimizations - issue #7
- [ ] It's 2016, the readmes need more gifs
