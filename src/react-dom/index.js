/* globals React */
import { render } from 'react-dom';
import { createStore } from '../state';

export function startApp (el, component, middleware = []) {
  const store = createStore(component.update, component.init(), middleware);

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
