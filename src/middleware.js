import _ from 'lodash';

function isAsyncAction (name) {
  return _.startsWith(name, '$');
}

function handleWith (handler, args) {
  const instances = handler.instances = handler.instances || [];

  const task = {
    isRunning: instances.length > 0,
    instances,
    done () {
      handler.instances = _.without(handler.instances, task);
      return task.done;
    },
    cancel () {
      handler.instances = _.without(handler.instances, task);
      if (task.onCancel) task.onCancel();
    }
  };

  const result = handler(task, ...args);
  if (result === task.done) return 'task:done';
  if (result === void 0) return 'task:relay';
  if (typeof result === 'function') task.onCancel = result;
  return result;
}

function handleAsyncAction (component, type, args = []) {
  const [head, ...tail] = type;

  // Own action
  const ownAction = _.get(component.actions, head);
  if (ownAction) return handleWith(ownAction, args);

  // Child override
  const override = _.get(component.actions, type);
  if (override) {
    const result = handleWith(override, args);
    if (result !== void 0) return result;
  }

  // Child action
  const child = _.get(component.components, head);
  if (child) return handleAsyncAction(child, tail, args);

  throw new Error(`Unable to find action ${head}`);
}

export function asyncMiddleware (rootComponent) {
  return (/*store*/) => (next) => (action) => {
    if (!_.isArray(action.type)) return next(action);
    if (!isAsyncAction(_.last(action.type))) return next(action);
    return handleAsyncAction(rootComponent, action.type, action.args);
  };
}
