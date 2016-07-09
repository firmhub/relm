/* eslint-env browser */
import m from 'mithril';
import relm from 'relm';
import { TodoMVC } from './components.js';


function transformAttributes (attrs, k) {
  const v = this[k];

  // Remove nil attributes
  if (v === null || v === void 0) return attrs;

  // Lower case event names (i.e. onClick to onclick)
  if (k.substring(0, 2) === 'on') {
    attrs[k.toLowerCase()] = v;
    return attrs;
  }
  // Other attributes get passed through
  attrs[k] = v;

  return attrs;
}

function createElement (tag, ...args) {
  if (tag instanceof Function) return tag(...args); // Sub-components

  const props = args[0];
  if (typeof props === 'object' && !Array.isArray(props) && !props.tag) {
    const attrs = Object.keys(props).reduce(transformAttributes.bind(props), {});
    return m(tag, attrs, ...args.slice(1));
  }

  return m(tag, ...args);
}

const App = relm(createElement, TodoMVC);

m.mount(document.querySelector('#main'), { view: App });

App.subscribe(m.redraw);
