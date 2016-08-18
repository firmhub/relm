import InfernoCreateElement from 'inferno-create-element';
import ViewPlugin from './ViewPlugin';

function transformAttributes (attrs, k) {
  const v = this[k];

  // Remove nil attributes
  if (v === null || v === void 0) return attrs;

  switch (k) {
    case 'onAttach': attrs.onAttached = v; break;
    case 'onDetach': attrs.onWillDetach = v; break;
    default:
  }

  return attrs;
}

export function createElement (tag, props, ...children) {
  const attrs = Object.keys(props || {}).reduce(transformAttributes.bind(props), {});
  return InfernoCreateElement(tag, attrs, ...children);
}

export default function InfernoPlugin () {
  return new ViewPlugin(createElement);
}
