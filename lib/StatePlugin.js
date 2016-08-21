'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _ = _interopDefault(require('lodash'));

var devMode = process.env.NODE_ENV !== 'production';

function _update(source, mutation) {
  var isChanged = false;
  var value = source;
  var newValue = void 0;

  _.each(mutation, function (mut, key) {
    if (_update.isCommand(key)) {
      newValue = _update.getCommand(key)(mut, value);
      if (newValue !== source) {
        isChanged = true;
        value = newValue;
      } else {
        value = source;
      }
    } else {
      if (value === source) value = _.clone(source) || {};
      newValue = _update(value[key], mut);
      isChanged = isChanged || newValue !== value[key];
      value[key] = newValue;
    }
  });

  return isChanged ? value : source;
}

_update.isCommand = function isCommand(k) {
  return _update.commands.hasOwnProperty(k);
};

_update.getCommand = function getCommand(k) {
  return _update.commands[k];
};

_update.commands = {
  $apply: function $apply(f, value) {
    return f(value);
  },
  $set: function $set(value) {
    return value;
  },
  $concat: function $concat(elements, arr) {
    return arr.concat(elements);
  },
  $splice: function $splice(splices, arr) {
    if (splices.length > 0) {
      return _.reduce(splices, function (acc, splice) {
        acc.splice.apply(acc, splice);
        return acc;
      }, _.clone(arr));
    }

    return arr;
  },
  $merge: function $merge(whatToMerge, obj) {
    var result = _.clone(obj);
    var isChanged = false;

    _.each(whatToMerge, function (v, k) {
      result[k] = v;
      isChanged = isChanged || v !== obj[k];
    });

    return isChanged ? result : obj;
  }
};

function Immutable(props) {
  if (!(this instanceof Immutable)) return new Immutable(props);
  _.assign(this, props);
  if (devMode) Object.freeze(this);
}

Immutable.prototype = {
  select: function select(path) {
    return makeImmutable(_.get(this, path));
  },
  update: function update(spec) {
    return makeImmutable(_update(this, spec));
  },
  set: function set(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $set: a } : _.set({}, a, { $set: b })));
  },
  concat: function concat(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $concat: a } : _.set({}, a, { $concat: b })));
  },
  splice: function splice(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $splice: a } : _.set({}, a, { $splice: b })));
  },
  map: function map(a, b) {
    // mapWith :: (a -> b) -> [a] -> [b]
    var mapWith = function mapWith(f) {
      return function (arr) {
        return arr.map(function immutableMapper(v, i) {
          var value = makeImmutable(v);
          var result = f(value, i, arr);
          return unwrapImmutable(result);
        });
      };
    };

    return makeImmutable(_update(this, arguments.length === 1 ? { $apply: mapWith(a) } : _.set({}, a, { $apply: mapWith(b) })));
  },
  merge: function merge(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $merge: a } : _.set({}, a, { $merge: b })));
  }
};

function makeImmutable(arg) {
  if (arg instanceof Immutable) return arg;
  return new Immutable(arg);
}

function unwrapImmutable(arg) {
  if (arg instanceof Immutable) return _.clone(arg);
  return arg;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

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

var StatePlugin = function () {
  function StatePlugin() {
    classCallCheck(this, StatePlugin);
  }

  createClass(StatePlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      var components = component.components;

      var handlers = _.reduce(source.actions, function convertChildActions(obj, action, name) {
        if (!_.isFunction(action)) return obj;

        // Child action override
        if (components[name]) {
          obj[name] = createOverrideHandler(action);
          return obj;
        }

        obj[name] = action;
        return obj;
      }, {});

      component.init = unwrapAfter(function init() {
        console.log(component.displayName, handlers);
        var state = _.mapValues(component.components, function (child) {
          return child.init();
        });
        if (!handlers.initializeState) return state;
        return handlers.initializeState(makeImmutable(state));
      });

      component.update = unwrapAfter(function update(state, action) {
        if (!_.isArray(action.type)) return state;

        var _action$type = toArray(action.type);

        var head = _action$type[0];

        var tail = _action$type.slice(1);

        var isChildAction = _.has(components, head);
        var hasLocalHandler = _.isFunction(handlers[head]);

        if (isChildAction) {
          var _ret = function () {
            // No override; let the child component handle it
            if (!hasLocalHandler) {
              var childAction = _.defaults({ type: tail }, action);
              var nextChildState = components[head].update(makeImmutable(state[head]), childAction);
              return {
                v: state.set(head, nextChildState)
              };
            }

            // Action type is overriden, so use the override
            var child = components[head];
            var next = function next(childState) {
              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              return child.update(makeImmutable(childState), { type: tail, args: args });
            };
            next.path = tail;
            return {
              v: handlers[head].apply(handlers, [makeImmutable(state), next].concat(toConsumableArray(action.args)))
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        if (hasLocalHandler) {
          return handlers[head].apply(handlers, [makeImmutable(state)].concat(toConsumableArray(action.args)));
        }

        return state;
      });

      component.actions = _.mapValues(source.actions, function (__, actionName) {
        var type = component.path.concat(actionName);

        var fn = function fn() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return root.dispatch({ type: type, args: args });
        };
        // const fn = _.startsWith(actionName, '$')
        //   ? (...args) => root.dispatch({ type, args, component })
        //   : (...args) => root.dispatch({ type, args });

        Object.defineProperties(fn, {
          name: { value: actionName },
          displayName: { value: actionName }
        });

        return fn;
      });
    }
  }]);
  return StatePlugin;
}();

function createOverrideHandler(override) {
  if (_.isFunction(override)) return override;

  var strategy = _.mapValues(override, function (o) {
    return _.isFunction(o) ? o : createOverrideHandler(o);
  });

  return function reducer(state, next, action) {
    var fn = _.get(strategy, action.type[0]);
    if (fn) return fn(state, next, action);
    return next(state, action);
  };
}

function unwrapAfter(fn) {
  return function unwrap() {
    return unwrapImmutable(fn.apply(this, arguments));
  };
}

exports['default'] = StatePlugin;