/* eslint-env browser */
import yo from 'yo-yo';
import { Node } from '../node';

function stateStore () {
  let state = arguments[0];
  let notifying = false;

  const subscribers = [];

  function notify () {
    if (notifying) return;
    notifying = true;
    subscribers.slice().forEach(f => f());
    notifying = false;
  }

  function getset (update) {
    if (arguments.length > 0) {
      state = update;
      requestAnimationFrame(notify);
    }
    return state;
  }

  getset.subscribe = function subscribe (f) {
    subscribers.push(f);
  };

  return getset;
}

export function startApp (rootComponent) {
  const store = stateStore();
  const app = Node.createRootNode(rootComponent, store());
  const el = app.view();

  store.subscribe(function redraw () {
    yo.update(el, app.view());
  });

  document.body.insertBefore(el, document.body.firstChild);
}

function transformAttributes (attrs, k, i, props) {
  const v = props[k];

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

export function jsx (tag, props, ...children) {
  if (tag instanceof Function) return tag(props, children); // Sub-components

  const attrs = Object.keys(props || {}).reduce(transformAttributes, {});
  return yo.createElement(tag, attrs, children);
}
