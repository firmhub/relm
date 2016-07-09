import React from 'react';
import ReactDOM from 'react-dom';

import { createApp, extendHyperscript } from '../index';

function transformAttributes (attrs, k) {
  const v = this[k];

  // Remove nil attributes
  if (v === null || v === void 0) return attrs;

  switch (k) {
    case 'for': attrs.htmlFor = v; break;
    case 'onDblClick': attrs.onDoubleClick = v; break;
    default: attrs[k] = v;
  }

  return attrs;
}

function createElement (tag, props, ...children) {
  const attrs = Object.keys(props || {}).reduce(transformAttributes.bind(props), {});
  // console.log(attrs);
  return React.createElement(tag, attrs, ...children);
}

export function relmApp (el, component, opts = {}) {
  const h = extendHyperscript(createElement);
  const app = createApp(h, component, opts);

  ReactDOM.render(app(), el);

  app.subscribe(function redraw () {
    ReactDOM.render(app(), el);
  });

  return app;
}
