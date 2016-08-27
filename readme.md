# relm
Component based application architecture

## How is this different from redux/elm/vue/react/...

* Pure functions - everything comes in as function parameters
* Project goal is to manage entire application state - from application level to running async tasks to component level state
* Components are organized in a tree and state
* Low boilerplate - infact relm is only needed for bootstrapping the


## Get started

### In the browser with [hyperscript](#)

Create a `html` file on your desktop and copy paste the following:

```html
<html>
<body>
<div id="app"></div>
<script src="https://rawgit.com/hyperfinite/relm/1.3.0/dist/relm-inferno.min.js"></script>
<script>
  function App (h) {
    return h('h1', 'Hello world!');
  }

  relm.inferno(App, {
    el: document.querySelector('#app')
  });
</script>
</html>
```

### From NPM with [JSX](#) support

Create a `html` file on your desktop and copy paste the following:

```html
<html>
<body>
<div id="app"></div>
<script src="https://rawgit.com/hyperfinite/relm/1.3.0/dist/relm-inferno.min.js"></script>
<script>
  function App (h) {
    return h('h1', 'Hello world!');
  }

  relm.inferno(App, {
    el: document.querySelector('#app')
  });
</script>
</html>
```
