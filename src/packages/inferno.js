/* eslint-env browser */
import InfernoDOM from 'inferno-dom';
import relm from '../';
import StatePlugin from '../plugins/StatePlugin';
import GraphQLPlugin from '../plugins/GraphQLPlugin';
import TasksPlugin from '../plugins/TasksPlugin';
import ReduxPlugin from '../plugins/ReduxPlugin';
import CSJSPlugin from '../plugins/CSJSPlugin';
import InfernoPlugin from '../plugins/InfernoPlugin';

export function relmApp (component, el, opts) {
  const { customizeReducer, customizeMiddleware, theme } = opts || {};

  const app = relm({
    component,
    plugins: [
      new StatePlugin(),
      new GraphQLPlugin(),
      new TasksPlugin(),
      new ReduxPlugin({ customizeReducer, customizeMiddleware }),
      new CSJSPlugin({ theme }),
      new InfernoPlugin(),
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
