import t from 'tcomb';

export const Component = t.refinement(t.Function, function isComponent (x) {
  // if (x.components && !t.dict(t.String, Component).is(x.components)) return false;
  // if (x.styles && !t.Function.is(x.styles)) return false;
  // if (x.actions && !t.Object.is(x.actions)) return false;
  return true;
}, 'RelmComponent');
