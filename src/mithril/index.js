/* globals m */
import { createStore } from '../internals/state';

export function startApp (el, component, middleware = []) {
  const store = createStore(component.update, component.init(), middleware);

  m.mount(el, {
    view () {
      return component.view({
        dispatch: store.dispatch,
        state: store.getState()
      });
    }
  });

  store.subscribe(m.redraw);

  return store;
}
