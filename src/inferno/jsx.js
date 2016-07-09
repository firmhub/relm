import createElement from 'inferno-create-element';

export function jsx (tag, props, ...children) {
  if (tag instanceof Function) return tag(props, children); // Sub-components
  return createElement(tag, props, ...children);
}
