import Inferno from 'inferno-dom';
import InfernoElement from 'inferno-create-element';

import relm, { extendHyperscript } from './main';

export function relmApp (el, component, opts = {}) {
  const createElement = extendHyperscript(InfernoElement);
  const app = relm(createElement, component, opts);

  Inferno.render(app(), el);

  app.subscribe(function redraw () {
    Inferno.render(app(), el);
  });

  return app;
}
