/* eslint-disable no-console */
import _ from 'lodash';
import { createStore, applyMiddleware } from 'redux';

import { makeReducer } from './reducer';
import { parseComponent } from './component';
import { makeImmutable, unwrapImmutable } from './update';
import { extendHyperscript } from './hyperscript';

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

export default function relm (createElement, rootComponent, opts = {}) {
  const middleware = opts.debug ? applyMiddleware(logger) : void 0;
  const reducer = makeReducer(rootComponent);
  const initialState = _.merge(reducer() || {}, opts.initialState || {});
  const store = opts.store || createStore(reducer, initialState, middleware);

  // Setup the component heirarchy
  const result = parseComponent(createElement, rootComponent, {
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
  extendHyperscript,
};
