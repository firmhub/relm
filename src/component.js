import _ from 'lodash';

function parseListComponent (createElement, component, opts) {
  const { dispatch, getState, path, displayName } = opts;

  const cache = new WeakMap();

  return {
    // List component views need to be commuted at time of access since
    // they depend on the state of the underlying list; so we return a
    // getter function here instead of the instantiated component
    getter () {
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
    }
  };
}

export function parseComponent (component, opts) {
  const render = component.bind(null, opts.createElement);
  const { dispatch, getState, path, displayName } = opts;

  // Prepare actions
  const childKeys = _.keys(component.components);
  const ownActions = _.omit(component.actions || {}, childKeys);
  const actionCreator = (__, type) => (...args) => dispatch({ type: path.concat(type), args });
  const actions = _.mapValues(ownActions, actionCreator);

  const childStyles = {};

  // Prepare components
  const components = _.reduce(component.components, (obj, it, name) => {
    const childOpts = _.defaults({
      displayName: name,
      getState () { return _.get(getState(), name); },
      path: path.concat(name),
    }, opts);

    let child;

    if (_.isArray(it)) {
      // List component - assign getter instead of the view
      child = parseListComponent(_.head(it), childOpts);
      Object.defineProperty(obj, name, { enumerable: true, get: child.getter });
    } else {
      // Normal component - assign the view directly
      child = parseComponent(it, childOpts);
      obj[name] = child.view;
    }

    childStyles[name] = child.styles;

    return obj;
  }, {});

  let styles = {};

  if (_.isFunction(component.styles)) {
    const result = component.styles(opts.createCSS, {
      theme: opts.theme,
      components: childStyles,
    });

    opts.generatedCSS.push(result);
    styles = _.mapValues(result, selector => selector.toString());
  }

  function view (props, ...children) {
    return render({ props, children, actions, styles, components, state: getState() });
  }

  view.displayName = displayName;

  return { styles, view };
}
