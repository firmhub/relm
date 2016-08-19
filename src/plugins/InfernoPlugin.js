import _ from 'lodash';
import InfernoCreateElement from 'inferno-create-element';
import ViewPlugin from './ViewPlugin';

function transformAttributes (source, attrs, k) {
  const v = source[k];

  // Remove nil attributes
  if (v === null || v === void 0) return attrs;

  switch (k) {
    case 'onAttach': attrs.onAttached = v; break;
    case 'onDetach': attrs.onWillDetach = v; break;
    default: attrs[k] = v;
  }

  return attrs;
}

export function createElement (tag, props, ...children) {
  const attrs = _.reduce(_.keys(props), _.partial(transformAttributes, props), {});
  return InfernoCreateElement(tag, attrs, ...children);
}

export default function InfernoPlugin () {
  return new ViewPlugin(createElement);
}
