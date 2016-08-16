/* eslint-env browser */
import _ from 'lodash';
import fs from 'fs';
import { renderToString } from 'inferno-server';

import relm from '../';
import StatePlugin from '../plugins/StatePlugin';
import ReduxPlugin from '../plugins/ReduxPlugin';
import StylesPlugin from '../plugins/StylesPlugin';
import InfernoPlugin, { createElement } from '../plugins/InfernoPlugin';
import { extendHyperscript } from '../plugins/ViewPlugin';
import * as fmt from './inferno-format';

export { createElement, renderToString };

/*
 * Create app that can be rendered server side
 * -------------------------------------------
 * Differences from normal relm app
 * 1) No state changes are expected - just render with an initial state
 *    a) no reducer or middleware customization
 *    b) No tasks
 * 2) No styles for now - TODO: generate serverside css
 */

export function createApp (component, opts) {
  const { initialState, theme } = opts || {};

  const app = relm({
    component,
    plugins: [
      new StatePlugin(),
      new ReduxPlugin({ initialState }),
      new StylesPlugin(null, theme),
      new InfernoPlugin(),
    ]
  });

  if (app.actions.initializeState) {
    app.actions.initializeState();
  }

  return app;
}

/*
 * Shallow rendering a component
 */
export function shallowRender (component, config = {}) {
  const components = _.mapValues(component.components, componentToDummyElement);

  const h = extendHyperscript(createElement, components);
  Object.assign(h, components);
  config.components = components;

  return component(h, config);

  // Maps components to a dummy inferno element -- the tag of the dummy is
  // a function so that `./inferno-format` module can distinguish it from
  // other elements that are genuine inferno elements
  function componentToDummyElement (__component__, key) {
    return (attrs, ...children) => ({ tag: () => key, attrs, children });
    // Alternate - allow Inferno to transform attributes (ex: lowercase event handlers)
    // return (attrs, ...children) => createElement(key, attrs, children);
  }
}

/*
 * Testing helper - shallow renders a component and compares the result to
 * accepted result from file. The .accept() modifier can be used to accept
 * a test result
 */
export function renderAcceptanceTest (component, config) {
  const actual = fmt.serialize(shallowRender(component, config));
  const filename = getFilename(module.parent.filename);
  const accepted = getAccepted(filename);

  return function test (t) {
    const title = getTitle(t);

    // New test
    if (!accepted[title]) {
      writeAccepted(filename, title, actual);
      console.log(`Saved new result: ${title}\n${filename}\n\n${actual}`);
      return t.pass();
    }

    const expected = fmt.deserialize(accepted[title]);
    const diff = fmt.diff(fmt.deserialize(expected), actual);

    if (!diff) return t.pass();

    // Diff but difference is accepted
    if (/#accept(\s|$)/.test(t.title)) {
      writeAccepted(filename, title, actual);
      return t.pass(`Accepted: ${title}: \n\n ${actual}`);
    }

    // Mismatch
    return t.fail(`Fragment did not match accepted result: ${title} \n\n ${diff} \n\n`);
  };
}

function getFilename (target) {
  return target.replace(/(.js)?$/, '_accepted.js');
}

function getTitle (t) {
  return t.title.replace(/(#|@)\w+?(\s|$)/g, ' ').trim();
}

function getAccepted (filename) {
  try {
    return require(filename);  // eslint-disable-line global-require
  } catch (ex) {
    return {};
  }
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
