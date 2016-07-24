import _ from 'lodash';

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

export function asyncMiddleware (rootComponent) {
  return (store) => (next) => (action) => {
    if (!_.isArray(action.type)) return next(action);
    if (!isAsyncAction(_.last(action.type))) return next(action);
    const path = _.initial(action.type);
    const task = {
      dispatch: store.dispatch,
      getState: !path.length ? store.getState : () => _.get(store.getState(), path),
      actions: action.actions
    };
    return handleAsyncAction(task, rootComponent, action.type, action.args);
  };
}
