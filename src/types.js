import _ from 'lodash';
import t from 'tcomb';

const Actions = t.dict(t.String, t.Function, 'Actions');
const Overrides = t.dict(t.String, t.Object, 'Overrides');

function shallowCheckComponent (it) {
  if (!t.Function.is(it)) return `Component should be a function; got ${typeof it}`;
  if (!t.maybe(t.Object).is(it.components)) return 'components property should be an object';
  if (!t.maybe(t.Function).is(it.styles)) return 'styles should be a function';
  if (!t.maybe(Actions).is(it.actions)) return 'actions should be an object with functions only';
  if (!t.maybe(Overrides).is(it.overrides)) return 'overrides should an object of objects';
  return void 0;
}

export const deepCheckComponent = process.env.NODE_ENV === 'production' ? _.noop : (component, path = []) => {
  const err = shallowCheckComponent(component);
  if (err) throw new Error(`Invalid component ${path.join('.')}: ${err}`);
  _.each(component.components, (it, name) => deepCheckComponent(it, path.concat(name)));
};

export const Component = t.irreducible('Component', function isComponent (x) {
  try {
    deepCheckComponent(x);
    return true;
  } catch (ex) {
    return false;
  }
});
