# You kids and your gizmos
> __relm guide__: Tutorial no. 6 - Developer tools

This tutorial will function as an intermission of sorts; instead of adding more features to our application, we will explain some of the developer tools integrated in `relm`, the technologies that power them and how to use them.

##### Behind the scenes

Internally, relm uses a module bundler called `webpack`. Webpack allows us to covert code that we write with imports, jsx, etc. into code that can run in browsers (even older ones supporting only ES5). Running webpack can be a bit of challenge for starters, so for ease of use, relm provides the `relm-compile` command, which triggers webpack to do the following:

*	compile all `js` and `jsx` files to plain ES5 file using `babel`
* bundle all modules - separating common modules into a separate file if necessary
* creating `html` files to run the javascript files as a webpage  
* depending on the options used provide `React` or `mithril` as a global in all files so you do not need them in each module
* copy any assets you specify into the build folder
* reduce file size using minification and `babel-plugin-lodash`

There is also a `--watch` flag which can be added to the `relm-compile` command, which will start the build process in a continuous build mode. This will do the following:

* Run the `webpack-dev-server` which will server the built files on a local server. These files update and refresh the browser automatically so you can change your code and see the results instantly. Internally it uses a feature called "module hot reloading".
* Run `redux-devtools` so you can see state changes and dispatched actions in your application

There are a lot of technologies and buzzwords mentioned above. You don't have to understand everything to get started with `relm` but as you app gets more complex, you may want to start customizing or re-implementing these to suit your work flow and use case.

Also, keep in mind these are all provided for developer convenience, so if there is something you would like to see included, feel free to request it or create a pull request to add it. There is a good chance others are also having similar difficulties.

##### Using relm-compile

The build itself is configured through the `package.json` file. To use it, first ensure that `relm` is installed and then use `relm-compile` with npm scripts. The package.json for this tutorial can look like this:

```javascript
{
  //...
  "scripts": {
    "build": "relm-compile",
    "watch": "relm-compile --watch",
  },
  "dependencies": {
    "relm": "*"
  },
  "relm-compile-settings": {
    // your settings go here
  }
  //...
}
```  
The above scripts can be run from the terminal using `npm run build` or `npm run watch`.

The property `relm-compile-settings` can be omitted if you have nothing to change. By default, `relm` will look for an entry file called `index.js` in the current directory and build the files into a `build` directory. Refer to the [API documentation](#TODO) to see what options are available.

##### Output as a component



##### Hot reloading

If you run the `watch` script above, you will get the benefit of you browser refreshing on each change you make in your source code. This should be sufficient in most cases, however, it also means you lose all application state on each refresh.

This can be inconvenient in certain scenarios when working with stateful components such as forms where you want to keep the data you entered. In that case you can use something called `hot module replacement` to refresh the application while keeping the state intact. This is a little bit more work.

###### Step 1 - Start dev server in hot mode

Use the `--hot` flag along with `--watch` in order to load the development server with hot module replacement enabled. The command will look like this:

```javascript
"watch" : "relm-compile --watch --hot"
```   

###### Step 2 - Listen for updates in the entry file

In the entry file (in this case `index.js`), you need to add additional code which tells `relm` to reload the top level component as such:

```javascript

import { startApp } from 'relm/react-dom';
import FancyForm from './fancy-form';

const container = document.createElement('div');
document.body.appendChild(container);

const app = startApp(container, FancyForm);

// Hot module reloading
if (module.hot) {
  module.hot.accept('./fancy-form', function asdasd () {
    const updatedComponent = require('./fancy-form').default;
    app.hotReload(updatedComponent);
  });
}

```
Until now, we have only called the `startApp` function and not cared about its return value. Here we see that it returns an object called `app`. This `app` object has a method called `hotReload` which does exactly what we need.

The remaining code is required by webpack's hot module replace functionality. We effectively attach an event listener to the `fancy-form` module, which is our top level component and every time it change, we `require` it again and pass the updated component to `app.hotReload`.

This will cause `relm` to replace the `update` and `view` functions and re-render the application.

###### Step 3 - Presist state across build failures

Finally, there is one peculiarity that has to do with how webpack behaves in hot mode if a build fails. In hot mode, if the build fails, due to for example a syntax error, on the next successful build, webpack will do a full refresh instead of just a hot reload. This can cause you to lose the state of the application.

In order to workaround this, `relm` adds a recovery mechanism for the state, which is to save the state in local storage and then even on a full refresh, state can be recovered.

In order to use this feature, you need to provide a url parameter called `debug_session`; for example:

```
http://localhost:8080/index.html?debug_session=my_session
```
This will let relm know to save your state to local storage using the key `my_session` and the next time the browser visits the same url (example after a refresh), it will reload the state that was previously saved.

### Recap

We learned about the `relm-compile` command and how we can use it to build our source code into backwards compatible applications. We also learned about the develpment server that can help you write your application faster.

We also explored an advanced feature called hot module replacement to help in some development scenarios.

That's it for now. Hopefully you have a better understanding of the development tools provided by default in relm and they have made your life a bit easier.
