import _ from 'lodash';
import InfernoCreateElement from 'inferno-create-element';
import ViewPlugin, { extendHyperscript } from './ViewPlugin';

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

export const createElement = extendHyperscript(function infernoEl (tag, props, ...children) {
  const attrs = Object.keys(props || {}).reduce(_.bind(transformAttributes, props), {});
  return InfernoCreateElement(tag, attrs, ...children);
});

export default function InfernoPlugin () {
  return new ViewPlugin(createElement);
}
