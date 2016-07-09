import _ from 'lodash';

function parseListComponent (createElement, component, opts) {
  const { dispatch, getState, path, displayName } = opts;

  const cache = new WeakMap();

  return function getter () {
    return getState().map((state, index) => {
      // Check if the component was previously parsed
      const cached = cache.get(state);
      if (cached && cached.index === index) return cached.view;

      // Cache miss - parse the component
      // eslint-disable-next-line no-use-before-define
      const view = parseComponent(createElement, component, {
        displayName: `${displayName}[${index}]`,
        dispatch,
        getState () { return _.get(getState(), index); },
        path: path.concat(index)
      });

      cache.set(state, { index, view });

      return view;
    });
  };
}

export function parseComponent (createElement, component, opts) {
  const render = component.bind(null, createElement);
  const { dispatch, getState, path, displayName } = opts;

  // Prepare actions
  const childKeys = _.keys(component.components);
  const ownActions = _.omit(component.actions || {}, childKeys);
  const actionCreator = (__, type) => (...args) => dispatch({ type: path.concat(type), args });
  const actions = _.mapValues(ownActions, actionCreator);

  // Prepare components
  const components = _.reduce(component.components, (obj, it, name) => {
    const childOpts = {
      displayName: name,
      dispatch,
      getState () { return _.get(getState(), name); },
      path: path.concat(name),
    };

    // List component
    if (_.isArray(it)) {
      return Object.defineProperty(obj, name, {
        enumerable: true,
        get: parseListComponent(createElement, _.head(it), childOpts)
      });
    }

    // Normal component
    obj[name] = parseComponent(createElement, it, childOpts);
    return obj;
  }, {});

  function view (props, ...children) {
    return render({ props, children, actions, components, state: getState() });
  }

  view.displayName = displayName;

  return view;
}
