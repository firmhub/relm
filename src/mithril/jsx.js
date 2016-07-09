import m from 'mithril';

function transformAttributes (attrs, k, i, props) {
  const v = props[k];

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

export function jsx (tag, props, ...children) {
  if (tag instanceof Function) return tag(props, children); // Sub-components

  const attrs = Object.keys(props || {}).reduce(transformAttributes, {});
  return m(tag, attrs, children);
}
