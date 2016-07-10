import Inferno from 'inferno-dom';
import InfernoCreateElement from 'inferno-create-element';

import { createApp, extendHyperscript } from '../index';

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
  const attrs = Object.keys(props || {}).reduce(transformAttributes.bind(props), {});
  return InfernoCreateElement(tag, attrs, ...children);
}

export function relmApp (el, component, opts = {}) {
  const h = extendHyperscript(createElement);
  const app = createApp(h, component, opts);

  Inferno.render(app.view(), el);

  app.subscribe(function redraw () {
    Inferno.render(app.view(), el);
  });

  return app;
}
