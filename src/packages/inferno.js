/* eslint-env browser */
import InfernoDOM from 'inferno-dom';
import relm from '../';
import * as plugins from '../plugins';

export function relmApp (component, el, opts) {
  const { customizeReducer, customizeMiddleware, theme } = opts || {};

  const app = relm({
    component,
    plugins: [
      new plugins.StatePlugin(),
      new plugins.TasksPlugin(),
      new plugins.ReduxPlugin({ customizeReducer, customizeMiddleware }),
      new plugins.CSJSPlugin(theme),
      new plugins.InfernoPlugin(),
    ]
  });

  // Create the view
  function redraw () {
    InfernoDOM.render(app.view(), el);
  }

  app.subscribe(requestAnimationFrame.bind(null, redraw));

  if (app.actions.initializeState) {
    app.actions.initializeState();
  }

  // First render
  redraw();

  return app;
}

InfernoDOM.relmApp = relmApp;

export default InfernoDOM;
