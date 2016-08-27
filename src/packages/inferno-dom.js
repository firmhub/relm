/* eslint-env browser */
import _ from 'lodash';
import InfernoDOM from 'inferno-dom';
import create from '../create';
import list from '../list';
import router from '../router';
import StatePlugin from '../plugins/StatePlugin';
import TasksPlugin from '../plugins/TasksPlugin';
import ReduxPlugin from '../plugins/ReduxPlugin';
import CSJSPlugin from '../plugins/CSJSPlugin';
import InfernoPlugin from '../plugins/InfernoPlugin';

function start (component, opts) {
  const {
    el,
    theme,
    customizePlugins,
    customizeStore,
    scheduler,
  } = opts || {};

  const app = create(component, {
    plugins: (customizePlugins || _.identity)([
      new StatePlugin(),
      new TasksPlugin(),
      new ReduxPlugin({ customizeStore }),
      new CSJSPlugin({ theme }),
      new InfernoPlugin(),
    ])
  });

  if (app.actions.initializeState) {
    app.actions.initializeState();
  }

  function render () {
    InfernoDOM.render(app.view(), el);
  }

  if (el) {
    app.subscribe(_.partial(scheduler || requestAnimationFrame, render));
    render();
  }

  return app;
}

export {
  create,
  list,
  router,
  start,
  StatePlugin,
  TasksPlugin,
  ReduxPlugin,
  CSJSPlugin,
  InfernoPlugin,
};
