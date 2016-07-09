import Inferno from 'inferno-dom';
import createElement from 'inferno-create-element';

import { createApp, extendHyperscript } from '../index';

export function relmApp (el, component, opts = {}) {
  const h = extendHyperscript(createElement);
  const app = createApp(h, component, opts);

  Inferno.render(app(), el);

  app.subscribe(function redraw () {
    Inferno.render(app(), el);
  });

  return app;
}
