/* eslint-disable no-console */

import { createStore, applyMiddleware } from 'redux';

import { makeReducer } from './reducer';
import { parseComponent } from './component';
import { makeImmutable, unwrapImmutable } from './update';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

export default function relm (rootComponent, opts = {}) {
  const middleware = opts.debug ? applyMiddleware(logger) : void 0;
  const store = opts.store || createStore(makeReducer(rootComponent), middleware);

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

export {
  makeReducer,
  parseComponent,
  makeImmutable,
  unwrapImmutable,
};
