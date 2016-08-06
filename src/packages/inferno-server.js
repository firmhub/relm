/* eslint-env browser */
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import { renderToString } from 'inferno-server';

import relm from '../';
import * as plugins from '../plugins';
import { createElement } from '../plugins/InfernoPlugin';
import * as fmt from './inferno-format';

export { createElement, renderToString };

export function createApp (component, opts) {
  const { initialState, theme } = opts || {};

  const app = relm({
    component,
    plugins: [
      new plugins.StatePlugin(),
      new plugins.TasksPlugin(),
      new plugins.ReduxPlugin({ initialState }),
      new plugins.StylesPlugin(null, theme),
      new plugins.InfernoPlugin(),
    ]
  });

  if (app.actions.initializeState) {
    app.actions.initializeState();
  }

  return app;
}

function componentToDummyElement (component, key) {
  return (...args) => createElement(key, ...args);
}

export function shallowRender (component, config = {}) {
  config.components = _.mapValues(component.components, componentToDummyElement);
  return component(createElement, config);
}

const acceptedCache = {};

function getFilename (target) {
  return path.resolve(path.dirname(target), `_accepted_${path.basename(target)}`);
}

function getAccepted (filename, forceReload) {
  if (forceReload || !acceptedCache[filename]) {
    try {
      acceptedCache[filename] = require(filename);  // eslint-disable-line global-require
    } catch (ex) {
      acceptedCache[filename] = {};
    }
  }
  return acceptedCache[filename];
}

function writeAccepted (filename, title, result) {
  const accepted = getAccepted(filename);

  accepted[title] = result;

  fs.writeFileSync(filename, _.chain(accepted)
    .keys()
    .sort()
    .reverse()
    .reduce(function serializeAcceptedResults (str, key) {
      return `exports[\`${fmt.escape(key)}\`] = \`${fmt.escape(accepted[key])}\`;\n\n${str}`;
    }, '\n')
    .value()
  );

  getAccepted(filename, true);
}

export function renderAcceptanceTest (component, config) {
  const actual = fmt.serialize(shallowRender(component, config));
  const filename = getFilename(module.parent.filename);
  const accepted = getAccepted(filename);

  return function test (t) {
    if (!accepted[t.title]) {
      writeAccepted(filename, t.title, actual);
      console.log(`Saved new accepted result: ${t.title}\n\n${actual}`);
      t.pass();
    } else {
      const expected = fmt.deserialize(accepted[t.title]);
      const diff = fmt.diff(fmt.deserialize(expected), actual);
      if (diff) t.fail(`Fragment did not match accepted result: ${t.title} \n\n ${diff} \n\n`);
    }
  };
}

renderAcceptanceTest.accept = function acceptFragment (component, config) {
  return function test (t) {
    const actual = fmt.serialize(shallowRender(component, config));
    const filename = getFilename(module.parent.filename);
    const accepted = getAccepted(filename);

    if (accepted[t.title]) {
      const expected = fmt.deserialize(accepted[t.title]);
      if (actual === expected) t.fail('No difference between actual and expected; don\'t use .accept()');
    }

    writeAccepted(filename, t.title, actual);
    t.pass(`Accepted: ${t.title}: \n\n ${actual}`);
  };
};
