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
      var TASK_TYPE = '  @relm_task  ';

      component.tasks = _.mapValues(source.tasks, function (__, taskName) {
        var type = [TASK_TYPE].concat(component.path, taskName);
        var fn = function fn() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return root.dispatch({ type: type, args: args });
        };

        Object.defineProperties(fn, {
          name: { value: taskName },
          displayName: { value: taskName }
        });

        return fn;
      });

      if (component !== root) return;

      component.middleware = function (store) {
        return function (next) {
          return function (action) {
            // Skip non-relm or non-async actions; async actions are ones where the
            // action name (last item in type array) starts with a $ sign
            if (!_.isArray(action.type)) return next(action);
            if (action.type[0] !== TASK_TYPE) return next(action);

            // Get the path of the component
            var path = action.type.slice(1);

            // Find the component
            var targetComponent = root;
            for (var i = 0, n = path.length - 1; i < n; i++) {
              var key = path[i];
              var nextComponent = targetComponent.components[key];
              if (!nextComponent) return null;
              targetComponent = nextComponent;
            }

            if (!targetComponent && process.env.NODE_ENV !== 'production') {
              throw new Error('Unable to find component for task ' + path);
            }

            // Create the task api
            var task = {
              dispatch: store.dispatch,
              getState: path.length <= 1 ? store.getState : function () {
                return _.get(store.getState(), path.slice(0, -1));
              },
              actions: targetComponent.actions,
              queries: targetComponent.queries
            };

            return handleAsyncAction(task, source, path, action.args);
          };
        };
      };
    }
  }]);
  return TasksPlugin;
}();

function attachTaskAPI(task, handler) {
  task.instances = handler.instances = handler.instances || [];
  task.isRunning = task.instances.length > 0;

  task.done = function done() {
    handler.instances = _.without(handler.instances, task);
  };

  task.cancel = function cancel() {
    handler.instances = _.without(handler.instances, task);
    if (task.onCancel) task.onCancel();
  };
}

function handleAsyncAction(task, component, type) {
  var args = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

  var _type = toArray(type);

  var head = _type[0];

  var tail = _type.slice(1);

  var handler = _.get(component, ['tasks', head]);
  var child = _.get(component, ['components', head]);

  function next() {
    for (var _len2 = arguments.length, overriddenArgs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      overriddenArgs[_key2] = arguments[_key2];
    }

    handleAsyncAction(task, child, tail, overriddenArgs);
    task.done();
  }

  // Overridden task
  if (child && handler) {
    attachTaskAPI(task, handler);

    var result = handler.apply(undefined, [task, next].concat(toConsumableArray(args)));
    if (typeof result === 'function') task.onCancel = result;
    return;
  }

  // Own task
  if (handler) {
    attachTaskAPI(task, handler);

    var _result = handler.apply(undefined, [task].concat(toConsumableArray(args)));
    if (typeof _result === 'function') task.onCancel = _result;
    return;
  }

  // Child task
  if (child) {
    handleAsyncAction(task, child, tail, args);
    return;
  }

  throw new Error('Unable to find task ' + head);
}

var internals = {
  attachTaskAPI: attachTaskAPI,
  handleAsyncAction: handleAsyncAction
};

exports['default'] = TasksPlugin;
exports.internals = internals;