'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var toArray = function (arr) {
  return Array.isArray(arr) ? arr : Array.from(arr);
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var TasksPlugin = function () {
  function TasksPlugin() {
    classCallCheck(this, TasksPlugin);
  }

  createClass(TasksPlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      if (component === root) {
        component.middleware = function (store) {
          return function (next) {
            return function (action) {
              // Skip non-relm or non-async actions; async actions are ones where the
              // action name (last item in type array) starts with a $ sign
              if (!_.isArray(action.type)) return next(action);
              if (!isAsyncAction(_.last(action.type))) return next(action);

              // Get the path of the component
              var path = _.initial(action.type);

              // Find the component
              var targetComponent = root;
              for (var i = 0, n = path.length; i < n; i++) {
                var key = path[i];
                var nextComponent = targetComponent.components[key];
                if (!nextComponent) return null;
                targetComponent = nextComponent;
              }

              // Create the task api
              var task = {
                dispatch: store.dispatch,
                getState: !path.length ? store.getState : function () {
                  return _.get(store.getState(), path);
                },
                actions: targetComponent.actions,
                queries: targetComponent.queries
              };

              return handleAsyncAction(task, source, action.type, action.args);
            };
          };
        };
      }
    }
  }]);
  return TasksPlugin;
}();

function isAsyncAction(name) {
  return _.startsWith(name, '$');
}

function handleWith(task, handler, args) {
  task.instances = handler.instances = handler.instances || [];
  task.isRunning = task.instances.length > 0;

  task.done = function done() {
    handler.instances = _.without(handler.instances, task);
    return task.done;
  };

  task.cancel = function cancel() {
    handler.instances = _.without(handler.instances, task);
    if (task.onCancel) task.onCancel();
  };

  var result = handler.apply(undefined, [task].concat(toConsumableArray(args)));
  if (result === task.done) return 'task:done';
  if (result === void 0) return 'task:relay';
  if (typeof result === 'function') task.onCancel = result;
  return result;
}

function handleAsyncAction(task, component, type) {
  var args = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

  var _type = toArray(type);

  var head = _type[0];

  var tail = _type.slice(1);

  // Own action


  var ownAction = _.get(component.actions, head);
  if (ownAction) return handleWith(task, ownAction, args);

  // Child override
  var override = _.get(component.overrides, type);
  if (override) {
    var result = handleWith(task, override, args);
    if (result !== void 0) return result;
  }

  // Child action
  var child = _.get(component.components, head);
  if (child) return handleAsyncAction(task, child, tail, args);

  throw new Error('Unable to find action ' + head);
}

var internals = {
  handleWith: handleWith,
  handleAsyncAction: handleAsyncAction
};

exports['default'] = TasksPlugin;
exports.internals = internals;