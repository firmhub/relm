/* globals React */
/* eslint global-require: 0 */
import _ from 'lodash';
import { render } from 'react-dom';
import { createStore } from '../internals/state';

function getConfiguration (Component, opts = {}) {
  return {
    reducer: Component.update || _.identity,
    initialState: _.isFunction(Component.init) ? Component.init() : null,
    middleware: opts.middleware || [],
    enhancers: []
  };
}

function production (el, Component, opts) {
  const storeOpts = getConfiguration(Component, opts);
  const store = createStore(storeOpts);

  function renderApp () {
    render(React.createElement(Component.view, {
      dispatch: store.dispatch,
      state: store.getState()
    }), el);
  }

  // Initial render
  renderApp();

  // Re-render on state change
  store.subscribe(renderApp);

  return store;
}

function development (el, Component, opts) {
  const { createDevTools } = require('redux-devtools');
  const { default: LogMonitor } = require('redux-devtools-log-monitor');
  const { default: DockMonitor } = require('redux-devtools-dock-monitor');

  const dockOpts = {
    toggleVisibilityKey: 'ctrl-h',
    changePositionKey: 'ctrl-q',
    defaultIsVisible: true
  };

  // Create the dev tools
  const log = React.createElement(LogMonitor, { theme: 'tomorrow' });
  const dock = React.createElement(DockMonitor, dockOpts, log);
  const DevTools = createDevTools( dock );

  // Add devtool to the store
  const storeOpts = getConfiguration(Component, opts);
  storeOpts.enhancers.push( DevTools.instrument() );

  // Create the store
  const store = createStore(storeOpts);

  function renderApp () {
    const html = React.createElement(
      'div', {},
      React.createElement(DevTools, { store }),
      React.createElement(Component.view, {
        state: store.getState(),
        dispatch: store.dispatch
      })
    );

    render(html, el);
  }

  // Initial render
  renderApp();

  // Re-render on state change
  store.subscribe(renderApp);

  return store;
}

export const startApp = process.env.NODE_ENV === 'production' ? production : development;
