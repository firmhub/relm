import _ from 'lodash';

export default class TasksPlugin {
  apply (component, source, root) {
    const TASK_TYPE = '  @relm_task  ';

    component.tasks = _.mapValues(source.tasks, (__, taskName) => {
      const type = [TASK_TYPE].concat(component.path, taskName);
      const fn = (...args) => root.dispatch({ type, args });

      Object.defineProperties(fn, {
        name: { value: taskName },
        displayName: { value: taskName }
      });

      return fn;
    });

    if (component !== root) return;

    component.middleware = (store) => (next) => (action) => {
      // Skip non-relm or non-async actions; async actions are ones where the
      // action name (last item in type array) starts with a $ sign
      if (!_.isArray(action.type)) return next(action);
      if (action.type[0] !== TASK_TYPE) return next(action);


      // Get the path of the component
      const path = action.type.slice(1);

      // Find the component
      let targetComponent = root;
      for (let i = 0, n = path.length - 1; i < n; i++) {
        const key = path[i];
        const nextComponent = targetComponent.components[key];
        if (!nextComponent) return null;
        targetComponent = nextComponent;
      }

      if (!targetComponent && process.env.NODE_ENV !== 'production') {
        throw new Error(`Unable to find component for task ${path}`);
      }

      // Create the task api
      const task = {
        dispatch: store.dispatch,
        getState: path.length <= 1 ? store.getState : () => _.get(store.getState(), path.slice(0, -1)),
        actions: targetComponent.actions,
        queries: targetComponent.queries,
      };

      return handleAsyncAction(task, source, path, action.args);
    };
  }
}

function attachTaskAPI (task, handler) {
  task.instances = handler.instances = handler.instances || [];
  task.isRunning = task.instances.length > 0;

  task.done = function done () {
    handler.instances = _.without(handler.instances, task);
  };

  task.cancel = function cancel () {
    handler.instances = _.without(handler.instances, task);
    if (task.onCancel) task.onCancel();
  };
}

function handleAsyncAction (task, component, type, args = []) {
  const [head, ...tail] = type;
  const handler = _.get(component, ['tasks', head]);
  const child = _.get(component, ['components', head]);

  function next (...overriddenArgs) {
    handleAsyncAction(task, child, tail, overriddenArgs);
    task.done();
  }

  // Overridden task
  if (child && handler) {
    attachTaskAPI(task, handler);

    const result = handler(task, next, ...args);
    if (typeof result === 'function') task.onCancel = result;
    return;
  }

  // Own task
  if (handler) {
    attachTaskAPI(task, handler);

    const result = handler(task, ...args);
    if (typeof result === 'function') task.onCancel = result;
    return;
  }

  // Child task
  if (child) {
    handleAsyncAction(task, child, tail, args);
    return;
  }

  throw new Error(`Unable to find task ${head}`);
}

export const internals = {
  attachTaskAPI,
  handleAsyncAction,
};
