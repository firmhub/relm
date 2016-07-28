import _ from 'lodash';
import { deepCheckComponent } from './types';

export function parseComponent (component, config, opts) {
  deepCheckComponent(component);
  return normalComponent(component, config, opts);
}

/**
 * @param {Function} component Definition for a normal 'non-list' relm component
 * @param {Object} config Common items like `createElement`, `createCSS`, etc.
 * @param {Object} opts Items that change based on component (path, getState, etc)
 * @returns {Object} with `view` and `styles` properties
 */
function normalComponent (component, config, opts) {
  const { displayName, getState, path } = opts;

  const render = component.bind(null, config.createElement);
  const sub = parseChildComponents(component.components, config, getState, path);
  const components = sub.components;
  const styles = processStyles(component.styles, sub.styles, config.createCSS, config.theme);
  const actions = makeActionCreators(component.actions, component.components, path, config.dispatch);

  function view (props, ...children) {
    return render({
      props: _.omit(props, 'styles'),
      children,
      actions,
      styles: _.assign(styles, (props || {}).styles),
      components,
      state: getState(),
    });
  }

  view.displayName = displayName;

  return { view, styles };
}


/**
 * listComponent() parser - instead of returning a view directly like
 * normalComponent(), this returns a getter which binds the correct state to
 * the resulting array of views
 *
 * @param {Functionp[]} Single element array with a relm component inside it
 * @param {Object} config Common items like `createElement`, `createCSS`, etc.
 * @param {Object} opts Items that change based on component (path, getState, etc)
 * @returns {Object} with `getter` and `styles` properties
 */
function listComponent ([component], config, opts) {
  const { getState, path, displayName } = opts;
  const sub = parseChildComponents(component.components, config, getState, path);
  const styles = processStyles(component.styles, sub.styles, config.createCSS, config.theme);

  const listComponentCache = new WeakMap();

  return {
    // List component views need to be commuted at time of access since
    // they depend on the state of the underlying list; so we return a
    // getter function here instead of the instantiated component
    styles,
    getter: () => getState().map((state, index) => {
      // Check if the component was previously parsed
      const cached = listComponentCache.get(state);
      if (cached && cached.index === index) return cached.view;

      // Cache miss - parse the component
      // eslint-disable-next-line no-use-before-define
      const { view } = normalComponent(component, config, {
        displayName: `${displayName}[${index}]`,
        getState: () => _.get(getState(), index),
        path: path.concat(index)
      });

      listComponentCache.set(state, { index, view });

      return view;
    })
  };
}

function parseChildComponents (components, config, getState, path) {
  return _.reduce(components, (target, it, componentName) => {
    const isListComponent = _.isArray(it);
    const parser = isListComponent ? listComponent : normalComponent;

    const result = parser(it, config, {
      displayName: componentName,
      getState: () => _.get(getState(), componentName),
      path: path.concat(componentName)
    });

    Object.defineProperty(target.components, componentName, {
      [isListComponent ? 'get' : 'value']: isListComponent ? result.getter : result.view,
      enumerable: true
    });

    target.styles[componentName] = result.styles;

    return target;
  }, {
    components: {},
    styles: {}
  });
}

/**
 * makeActionCreators
 * Creates action creator functions from a set of actions
 * bound to specific path + dispatch function
 *
 * Dispatch actions hava a `type` and `args` property
 * Async actions have an additional `actions` property
 *
 * @param {Object} source
 * @param {Object} components
 * @param {String} path
 * @param {Function} dispatch
 * @returns {Object}
 */
function makeActionCreators (source, components, path, dispatch) {
  return _.reduce(source, (actions, __, actionName) => {
    // Skip action overrides
    if (_.has(components, actionName)) return actions;

    const type = path.concat(actionName);

    actions[actionName] = _.startsWith(actionName, '$')
      // Async actions are given the actions in arguments
      ? (...args) => dispatch({ type, actions, args })
      // Sync actions
      : (...args) => dispatch({ type, args });

    return actions;
  }, {});
}

function processStyles (styles, components, css, theme = {}) {
  const result = _.isFunction(styles) ? styles(css, { theme, components }) : {};
  return _.defaults(result, components);
}

export const internals = {
  normalComponent,
  listComponent,
  parseChildComponents,
  makeActionCreators,
  processStyles,
};
