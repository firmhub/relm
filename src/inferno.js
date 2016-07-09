import Inferno from 'inferno-dom';
import InfernoElement from 'inferno-create-element';

import { createApp, extendHyperscript } from './index';

export function relmApp (el, component, opts = {}) {
  const createElement = extendHyperscript(InfernoElement);
  const app = createApp(createElement, component, opts);

  Inferno.render(app(), el);

  app.subscribe(function redraw () {
    Inferno.render(app(), el);
  });

  return app;
}
