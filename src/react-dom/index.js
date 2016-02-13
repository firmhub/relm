/* globals React */
/* eslint global-require: 0, func-style: 0 */
import _ from 'lodash';
import { render } from 'react-dom';
import { createStore } from '../internals/state';

function getConfiguration (Component/*, opts = {}*/) {
  return {
    reducer: Component.update || _.identity,
    initialState: _.isFunction(Component.init) ? Component.init() : null,

    // Currently no support for external middleware
    middleware: [],
    enhancers: []
  };
}

export let startApp = function production (el, Component, opts) {
  const storeOpts = getConfiguration(Component, opts);
  const store = createStore(storeOpts);

  let view = Component.view;

  function renderApp () {
    render(React.createElement(view, {
      dispatch: store.dispatch,
      state: store.getState()
    }), el);
  }

  // Initial render
  renderApp();

  // Re-render on state change
  store.subscribe(renderApp);

  return {
    getState () {
      return store.getState();
    },
    subscribeState (f) {
      return store.subscribe(f);
    },
    dispatchAction (action) {
      return store.dispatch(action);
    },
    hotReload (replacement) {
      view = replacement.view;
      store.replaceReducer(replacement.update || _.identity);
      renderApp();
    }
  };
};

if (process.env.NODE_ENV === 'hot') {
  startApp = function development (el, Component, opts) {
    const { createDevTools } = require('redux-devtools');
    const { persistState } = require('../internals/persist-state');
    const { default: LogMonitor } = require('redux-devtools-log-monitor');
    const { default: DockMonitor } = require('redux-devtools-dock-monitor');

    const dockOpts = {
      toggleVisibilityKey: 'ctrl-h',
      changePositionKey: 'ctrl-q',
      defaultIsVisible: false
    };

    // Create the dev tools
    const log = React.createElement(LogMonitor, { theme: 'tomorrow' });
    const dock = React.createElement(DockMonitor, dockOpts, log);
    const DevTools = createDevTools( dock );

    const urlMatches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
    const sessionKey = (urlMatches && urlMatches.length > 0) ? urlMatches[1] : null;

    console.info(`Dev tools:`, {
      sessionKey,
      toggleVisibility: dockOpts.toggleVisibilityKey,
      changePosition: dockOpts.changePositionKey
    });

    // Add devtool to the store
    const storeOpts = getConfiguration(Component, opts);

    storeOpts.enhancers.push(
      // Instrument the devtools
      DevTools.instrument(),

      // Allow state to be restored if debug_session is provided
      persistState(sessionKey)
    );

    // Create the store
    const store = createStore(storeOpts);

    let view = Component.view;

    function renderApp () {
      const html = React.createElement(
        'div', {},
        React.createElement(DevTools, { store }),
        React.createElement(view, {
          state: store.getState(),
          dispatch: store.dispatch
        })
      );

      render(html, el);
    }

    // Initial render
    renderApp();

    return {
      getState () {
        return store.getState();
      },
      subscribeState (f) {
        return store.subscribe(f);
      },
      dispatchAction (action) {
        return store.dispatch(action);
      },
      hotReload (replacement) {
        view = replacement.view;
        store.replaceReducer(replacement.update || _.identity);
        renderApp();
      }
    };
  };
}
