import yo from 'yo-yo';

import { createApp, extendHyperscript } from '../index';

function transformAttributes (attrs, k) {
  const v = this[k];

  // Remove nil attributes
  if (v === null || v === void 0) return attrs;

  // Lower case event names (i.e. onClick to onclick)
  if (k.substring(0, 2) === 'on') {
    attrs[k.toLowerCase()] = v;
    return attrs;
  }

  // Other attributes get passed through
  attrs[k] = v;

  return attrs;
}

function createElement (tag, props, ...children) {
  const attrs = Object.keys(props || {}).reduce(transformAttributes.bind(props), {});
  return yo.createElement(tag, attrs, children);
}

export function relmApp (el, component, opts = {}) {
  const h = extendHyperscript(createElement);
  const app = createApp(h, component, opts);

  let targetEl = yo.update(el, app());

  app.subscribe(function redraw () {
    targetEl = yo.update(targetEl, app());
  });

  return app;
}
