/* eslint-disable no-console */
import _ from 'lodash';
import * as redux from 'redux';
import csjs from 'csjs';
import insertCSS from 'insert-css';

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

function createStore (rootComponent, opts) {
  const middleware = opts.debug ? redux.applyMiddleware(logger) : void 0;
  const reducer = makeReducer(rootComponent);
  const initialState = _.merge(reducer() || {}, opts.initialState || {});
  return redux.createStore(reducer, initialState, middleware);
}

export function createApp (createElement, rootComponent, opts = {}) {
  const store = opts.store || createStore(rootComponent, opts);

  // We want to insert all the necessary css in one shot
  // So this array will function as an accumulator; parseComponent will
  // push all generated csjs styles into this
  const generatedCSS = [];

  // Setup the component heirarchy
  const result = parseComponent(rootComponent, {
    createElement,
    createCSS: csjs, generatedCSS,
    displayName: rootComponent.displayName || rootComponent.name || 'app',
    path: [],
    dispatch: store.dispatch,
    getState: store.getState
  });

  // Insert all the css
  const stylesToString = (str, style) => (str += csjs.getCss(style));
  insertCSS(generatedCSS.reduce(stylesToString, ''));

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
