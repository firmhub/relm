/* eslint-disable no-console */
import _ from 'lodash';
import * as redux from 'redux';
import csjs from 'csjs';
import insertCSS from 'insert-css';

import { makeReducer } from './reducer';
import { asyncMiddleware } from './middleware';
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

const usedStyles = {};

function substitueStyle (x) {
  if (typeof x !== 'string') return x;
  if (usedStyles.hasOwnProperty(x)) return usedStyles[x];
  return x;
}

function createCSS (pieces, ...substitutions) {
  const styles = csjs(pieces, ...substitutions.map(substitueStyle));

  insertCSS(csjs.getCss(styles));

  return _.mapValues(styles, x => {
    const generatedName = x.toString();
    usedStyles[generatedName] = x;
    return generatedName;
  });
}

function createStore (rootComponent, opts) {
  const reducer = makeReducer(rootComponent);
  const initialState = _.merge(reducer() || {}, opts.initialState || {});
  return redux.createStore(reducer, initialState, redux.applyMiddleware(
    ...(opts.debug ? [logger] : []),
    asyncMiddleware(rootComponent)
  ));
}

export function createApp (createElement, rootComponent, opts = {}) {
  const store = opts.store || createStore(rootComponent, opts);

  // Asynchronously dispatch all actions
  // const pendingActions = [];
  // let timer;
  // function drain () {
  //   while (pendingActions.length) {
  //     store.dispatch(pendingActions.shift());
  //   }
  //   clearTimeout(timer);
  //   timer = null;
  // }
  // dispatch (action) {
  //   pendingActions.push(action);
  //   if (!timer) timer = setTimeout(drain);
  // },

  const config = {
    createElement,
    createCSS,
    dispatch: store.dispatch,
    theme: opts.theme || {},
  };

  // Setup the component heirarchy
  const result = parseComponent(rootComponent, config, {
    displayName: rootComponent.displayName || rootComponent.name || 'app',
    path: [],
    getState: store.getState
  });

  result.subscribe = store.subscribe;
  result.dispatch = store.dispatch;
  result.getState = store.getState;

  function makeActionCreators (actions, __, actionName) {
    actions[actionName] = _.startsWith(actionName, '$')
      ? (...args) => store.dispatch({ type: [actionName], actions, args })
      : (...args) => store.dispatch({ type: [actionName], args });

    return actions;
  }

  result.actions = _.reduce(rootComponent.actions, makeActionCreators, {});

  return result;
}

export {
  makeReducer,
  parseComponent,
  makeImmutable,
  unwrapImmutable,
  extendHyperscript,
};
