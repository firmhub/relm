import Inferno from 'inferno-dom';
import InfernoElement from 'inferno-create-element';

import relm from './main';

function createElement (tag, ...args) {
  if (tag instanceof Function) return tag(...args); // Sub-components
  return InfernoElement.apply(this, arguments);
}

export function startApp (el, component, opts = {}) {
  const app = relm(createElement, component, opts);

  Inferno.render(app(), el);

  app.subscribe(function redraw () {
    Inferno.render(app(), el);
  });

  return app;
}
