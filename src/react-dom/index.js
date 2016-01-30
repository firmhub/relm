/* globals React */
import _ from 'lodash';
import { render } from 'react-dom';
import { createStore } from '../state';

export function startApp (el, component, middleware = []) {
  const init = component.init || _.noop;
  const update = component.update || _.identity;
  const store = createStore(update, init(), middleware);

  function renderApp () {
    render(React.createElement(component.view, {
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
