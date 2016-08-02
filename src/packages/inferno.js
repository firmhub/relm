import Inferno from 'inferno-dom';
import InfernoCreateElement from 'inferno-create-element';
import * as redux from 'redux';
import _ from 'lodash';

import relm from '../';
import { createCSS } from '../csjs';

function transformAttributes (attrs, k) {
  const v = this[k];

  // Remove nil attributes
  if (v === null || v === void 0) return attrs;

  switch (k) {
    case 'onLoad': attrs.onAttached = v; break;
    case 'onUnload': attrs.onWillDetach = v; break;
    default: attrs[k] = v;
  }

  return attrs;
}

function createElement (tag, props, ...children) {
  const attrs = Object.keys(props || {}).reduce(_.bind(transformAttributes, props), {});
  return InfernoCreateElement(tag, attrs, ...children);
}

export function relmApp (el, component, opts = {}) {
  const app = relm({
    component,
    plugins: [
      new relm.ReduxPlugin(),
      new relm.OverridesPlugin(),
      new relm.TasksPlugin(),
      new relm.StylesPlugin(createCSS, opts.theme),
      new relm.ViewPlugin(createElement),
    ]
  });

  // Create the store
  const customizeReducer = opts.customizeReducer || _.identity;
  const customizeMiddleware = opts.customizeMiddleware || _.identity;
  const reducer = customizeReducer((state = app.init(), action = {}) => app.update(state, action));
  const middleware = customizeMiddleware(app.middleware);
  const initialState = _.merge(reducer() || {}, opts.initialState || {});
  const store = redux.createStore(reducer, initialState, middleware);

  app.dispatch = store.dispatch;
  app.getState = store.getState;
  app.subscribe = store.subscribe;

  // Create the view
  function redraw () {
    Inferno.render(app.view(), el);
  }

  app.subscribe(() => {
    setTimeout(redraw);
  });

  if (app.actions.initializeState) {
    app.actions.initializeState();
  }

  // First render
  redraw();

  return app;
}
