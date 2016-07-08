import { createStore } from 'redux';

import { makeReducer } from './reducer';
import { parseComponent } from './component';

export default function relm (rootComponent, opts = {}) {
  const store = opts.store || createStore(makeReducer(rootComponent));

  // Setup the component heirarchy
  const result = parseComponent(rootComponent, {
    displayName: rootComponent.displayName || rootComponent.name || 'app',
    path: [],
    dispatch: store.dispatch,
    getState: () => store.getState()
  });

  result.subscribe = store.subscribe;
  result.dispatch = store.dispatch;
  result.getState = store.getState;

  return result;
}
