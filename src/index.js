import _ from 'lodash';
import { deepCheckComponent } from './types';

import router from './router';
import list from './list';

import ReduxPlugin from './plugins/ReduxPlugin';
import OverridesPlugin from './plugins/OverridesPlugin';
import TasksPlugin from './plugins/TasksPlugin';
import StylesPlugin from './plugins/StylesPlugin';
import ViewPlugin from './plugins/ViewPlugin';

function parser (plugins = []) {
  return function parse (component, source, path, root) {
    // Parse child components
    const components = _.mapValues(source.components || {}, (it, key) => {
      const child = _.isArray(it) ? _.head(it) : it;
      return parse({}, child, path.concat(key), root);
    });

    // Assign some basic props to the component
    const displayName = source.displayName || source.name;
    Object.assign(component, { components, path, displayName });

    // Run the component through the plugins
    _.each(plugins, plugin => plugin.apply(component, source, root));

    return component;
  };
}

export default function relm ({ component, plugins = [], path = [] }) {
  deepCheckComponent(component);
  const rootComponent = {};
  const parse = parser(plugins);

  return parse(rootComponent, component, path, rootComponent);
}

_.assign(relm, {
  ReduxPlugin,
  OverridesPlugin,
  TasksPlugin,
  StylesPlugin,
  ViewPlugin,
});

export {
  list,
  router,
};

export const internals = {
  parser,
};

/* Inferno

import relm from 'relm';
import css from 'relm/css';

function createElement (tag, props, ...children) {
  const attrs = Object.keys(props || {}).reduce(transformAttributes.bind(props), {});
  return InfernoCreateElement(tag, attrs, ...children);
}

export function relmApp (component, opts = {}) {
  const app = relm({
    root: component,
    plugins: [
      new relm.InitPlugin(),
      new relm.UpdatePlugin(),
      new relm.OverridesPlugin(),
      new relm.StylesPlugin(css),
      new relm.ViewPlugin(createElement)
    ]
  });

  app.subscribe(function redraw () {
    Inferno.render(app.view(), el);
  });

  Inferno.render(app.view(), el);

  return app;
}

*/

