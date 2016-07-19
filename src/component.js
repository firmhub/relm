import _ from 'lodash';

function makeActionCreators (actions, components, path, dispatch) {
  return _.reduce(actions, (ret, __, actionName) => {
    if (_.has(components, actionName)) return ret;  // Skip action overrides
    ret[actionName] = (...args) => dispatch({ type: path.concat(actionName), args });
    return ret;
  }, {});
}

function processStyles (styles, childStyles, css, theme) {
  if (!_.isFunction(styles)) return {};
  return styles(css, { theme, components: childStyles });
}

const parse = {
  subComponents (components, config, getState, path) {
    return _.reduce(components, (obj, it, componentName) => {
      const isListComponent = _.isArray(it);
      const parserType = isListComponent ? 'listComponent' : 'normalComponent';

      const result = parse[parserType](it, config, {
        displayName: componentName,
        getState: () => _.get(getState(), componentName),
        path: path.concat(componentName)
      });

      Object.defineProperty(obj.components, componentName, {
        [isListComponent ? 'get' : 'value']: isListComponent ? result.getter : result.view,
        enumerable: true
      });

      obj.styles[componentName] = result.styles;

      return obj;
    }, {
      components: {},
      styles: {}
    });
  },

  normalComponent (component, config, opts) {
    const { displayName, getState, path } = opts;

    const render = component.bind(null, config.createElement);
    const sub = parse.subComponents(component.components, config, getState, path);
    const components = sub.components;
    const styles = processStyles(component.styles, sub.styles, config.createCSS, config.theme);
    const actions = makeActionCreators(component.actions, component.components, path, config.dispatch);

    function view (props, ...children) {
      return render({
        props: _.assign({ className: '' }, _.omit(props, 'styles')),
        children,
        actions,
        styles: _.assign(styles, (props || {}).styles),
        components,
        state: getState(),
      });
    }

    view.displayName = displayName;

    return { view, styles };
  },

  listComponent ([component], config, opts) {
    const { getState, path, displayName } = opts;
    const sub = parse.subComponents(component.components, config, getState, path);
    const styles = processStyles(component.styles, sub.styles, config.createCSS, config.theme);

    const listComponentCache = new WeakMap();

    return {
      // List component views need to be commuted at time of access since
      // they depend on the state of the underlying list; so we return a
      // getter function here instead of the instantiated component
      styles,
      getter () {
        return getState().map((state, index) => {
          // Check if the component was previously parsed
          const cached = listComponentCache.get(state);
          if (cached && cached.index === index) return cached.view;

          // Cache miss - parse the component
          // eslint-disable-next-line no-use-before-define
          const instance = parse.normalComponent(component, config, {
            displayName: `${displayName}[${index}]`,
            getState () { return _.get(getState(), index); },
            path: path.concat(index)
          });

          listComponentCache.set(state, { index, view: instance.view });

          return instance.view;
        });
      }
    };
  }
};

export function parseComponent (component, config, opts) {
  return parse.normalComponent(component, config, opts);
}
