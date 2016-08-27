# relm
Component based application architecture

## How is this different from redux/elm/vue/react/...

* Pure functions - everything comes in as function parameters
* Project goal is to manage entire application state - from application level to async tasks to component level state
* Components are organized in a tree and state
* Low boilerplate - infact relm is only needed for bootstrapping; components are build from simple functions using the a straightforward structure
* Plugins for inline styles and css modules with obvious scoping

## Get started

### In the browser with [hyperscript](#)

Create a `html` file on your desktop and copy paste the following:

```html
<html>
<body>
<div id="app"></div>
<script src="https://cdn.rawgit.com/hyperfinite/relm/master/dist/inferno-starter.min.js"></script>
<script>
  function App (h) {
    return h('h1', 'Hello world!');
  }

  relm.start(App, {
    el: document.querySelector('#app')
  });
</script>
</html>
```

### From NPM with [JSX](#) support

> npm install relm

Add the `relm/preset` to your babel presets:

```json
{
  "presets": [
    "es2015",
    "relm/preset"
  ]
}
```

Then start writing your app as follows:

```javascript
import relm from 'relm/inferno-starter';

function App (h) {
  return (
    <h1>Hello world!</h1>
  );
}

relm.start(App, {
  el: document.querySelector('#app')
});
```
