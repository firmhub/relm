import _ from 'lodash';

export default class TasksPlugin {
  apply (component, source, root) {
    if (component === root) {
      component.middleware = (store) => (next) => (action) => {
        // Skip non-relm or non-async actions; async actions are ones where the
        // action name (last item in type array) starts with a $ sign
        if (!_.isArray(action.type)) return next(action);
        if (!isAsyncAction(_.last(action.type))) return next(action);

        // Get the path of the component
        const path = _.initial(action.type);
        const actions = _.get(component.components, path.join('.components.'));

        // Create the task api
        const task = {
          dispatch: store.dispatch,
          getState: !path.length ? store.getState : () => _.get(store.getState(), path),
          actions
        };

        return handleAsyncAction(task, source, action.type, action.args);
      };
    }
  }
}

function isAsyncAction (name) {
  return _.startsWith(name, '$');
}

function handleWith (task, handler, args) {
  task.instances = handler.instances = handler.instances || [];
  task.isRunning = task.instances.length > 0;

  task.done = function done () {
    handler.instances = _.without(handler.instances, task);
    return task.done;
  };

  task.cancel = function cancel () {
    handler.instances = _.without(handler.instances, task);
    if (task.onCancel) task.onCancel();
  };

  const result = handler(task, ...args);
  if (result === task.done) return 'task:done';
  if (result === void 0) return 'task:relay';
  if (typeof result === 'function') task.onCancel = result;
  return result;
}

function handleAsyncAction (task, component, type, args = []) {
  const [head, ...tail] = type;

  // Own action
  const ownAction = _.get(component.actions, head);
  if (ownAction) return handleWith(task, ownAction, args);

  // Child override
  const override = _.get(component.overrides, type);
  if (override) {
    const result = handleWith(task, override, args);
    if (result !== void 0) return result;
  }

  // Child action
  const child = _.get(component.components, head);
  if (child) return handleAsyncAction(task, child, tail, args);

  throw new Error(`Unable to find action ${head}`);
}

export const internals = {
  handleWith,
  handleAsyncAction,
};
