(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/assign"), require("lodash/clone"), require("lodash/defaults"), require("lodash/each"), require("lodash/get"), require("lodash/has"), require("lodash/isArray"), require("lodash/isFunction"), require("lodash/mapValues"), require("lodash/reduce"), require("lodash/set"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/assign", "lodash/clone", "lodash/defaults", "lodash/each", "lodash/get", "lodash/has", "lodash/isArray", "lodash/isFunction", "lodash/mapValues", "lodash/reduce", "lodash/set"], factory);
	else if(typeof exports === 'object')
		exports["StatePlugin"] = factory(require("lodash/assign"), require("lodash/clone"), require("lodash/defaults"), require("lodash/each"), require("lodash/get"), require("lodash/has"), require("lodash/isArray"), require("lodash/isFunction"), require("lodash/mapValues"), require("lodash/reduce"), require("lodash/set"));
	else
		root["StatePlugin"] = factory(root["lodash/assign"], root["lodash/clone"], root["lodash/defaults"], root["lodash/each"], root["lodash/get"], root["lodash/has"], root["lodash/isArray"], root["lodash/isFunction"], root["lodash/mapValues"], root["lodash/reduce"], root["lodash/set"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_123__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_126__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 132);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 123:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_123__;

/***/ },

/***/ 126:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_126__;

/***/ },

/***/ 13:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _get2 = __webpack_require__(3);

var _get3 = _interopRequireDefault(_get2);

var _defaults2 = __webpack_require__(13);

var _defaults3 = _interopRequireDefault(_defaults2);

var _has2 = __webpack_require__(25);

var _has3 = _interopRequireDefault(_has2);

var _isArray2 = __webpack_require__(5);

var _isArray3 = _interopRequireDefault(_isArray2);

var _mapValues2 = __webpack_require__(1);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _isFunction2 = __webpack_require__(20);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _reduce2 = __webpack_require__(2);

var _reduce3 = _interopRequireDefault(_reduce2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _immutable = __webpack_require__(65);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StatePlugin = function () {
  function StatePlugin() {
    _classCallCheck(this, StatePlugin);
  }

  _createClass(StatePlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      var components = component.components;

      var handlers = (0, _reduce3.default)(source.actions, function convertChildActions(obj, action, name) {
        if ((0, _isFunction3.default)(action)) obj[name] = action;
        if (components[name]) return createOverrideHandler(action);
        return obj;
      }, {});

      component.init = unwrapAfter(function init() {
        var state = (0, _mapValues3.default)(component.components, invokeInit);
        if (!handlers.initializeState) return state;
        return handlers.initializeState((0, _immutable.makeImmutable)(state));
      });

      component.update = unwrapAfter(function update(state, action) {
        if (!(0, _isArray3.default)(action.type)) return state;

        var _action$type = _toArray(action.type);

        var head = _action$type[0];

        var tail = _action$type.slice(1);

        var isChildAction = (0, _has3.default)(components, head);
        var hasLocalHandler = (0, _isFunction3.default)(handlers[head]);

        if (isChildAction) {
          var _ret = function () {
            // No override; let the child component handle it
            if (!hasLocalHandler) {
              return {
                v: components[head].update((0, _immutable.makeImmutable)(state[head]), (0, _defaults3.default)({ type: tail }, action))
              };
            }

            // Action type is overriden, so use the override
            var child = components[head];
            var next = function next(childState) {
              for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              return child.update.apply(child, [(0, _immutable.makeImmutable)(childState)].concat(args));
            };
            return {
              v: handlers[head].apply(handlers, [state, next].concat(_toConsumableArray(action.args)))
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }

        if (hasLocalHandler) {
          return handlers[head].apply(handlers, [(0, _immutable.makeImmutable)(state)].concat(_toConsumableArray(action.args)));
        }

        return state;
      });

      component.actions = (0, _mapValues3.default)(source.actions, function (__, actionName) {
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

exports.default = StatePlugin;


function createOverrideHandler(obj) {
  var strategy = (0, _mapValues3.default)(obj, function (o) {
    return (0, _isFunction3.default)(o) ? o : createOverrideHandler(o);
  });

  return function reducer(state, next, action) {
    var override = (0, _get3.default)(strategy, action.type[0]);
    if (override) return override(state, next, action);
    return next(state, action);
  };
}

function invokeInit(it) {
  return it.init();
}

function unwrapAfter(fn) {
  return function unwrap(state) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    return (0, _immutable.unwrapImmutable)(fn.apply(undefined, [(0, _immutable.makeImmutable)(state)].concat(args)));
  };
}

/***/ },

/***/ 2:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 20:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ },

/***/ 25:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ },

/***/ 3:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },

/***/ 5:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },

/***/ 65:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = undefined;

var _set2 = __webpack_require__(126);

var _set3 = _interopRequireDefault(_set2);

var _get2 = __webpack_require__(3);

var _get3 = _interopRequireDefault(_get2);

var _assign2 = __webpack_require__(8);

var _assign3 = _interopRequireDefault(_assign2);

var _reduce2 = __webpack_require__(2);

var _reduce3 = _interopRequireDefault(_reduce2);

var _clone2 = __webpack_require__(123);

var _clone3 = _interopRequireDefault(_clone2);

var _each2 = __webpack_require__(9);

var _each3 = _interopRequireDefault(_each2);

exports.Immutable = Immutable;
exports.makeImmutable = makeImmutable;
exports.unwrapImmutable = unwrapImmutable;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devMode = "production" !== 'production';

function _update(source, mutation) {
  var isChanged = false;
  var value = source;
  var newValue = void 0;

  (0, _each3.default)(mutation, function (mut, key) {
    if (_update.isCommand(key)) {
      newValue = _update.getCommand(key)(mut, value);
      if (newValue !== source) {
        isChanged = true;
        value = newValue;
      } else {
        value = source;
      }
    } else {
      if (value === source) value = (0, _clone3.default)(source) || {};
      newValue = _update(value[key], mut);
      isChanged = isChanged || newValue !== value[key];
      value[key] = newValue;
    }
  });

  return isChanged ? value : source;
}

exports.update = _update;
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
      return (0, _reduce3.default)(splices, function (acc, splice) {
        acc.splice.apply(acc, splice);
        return acc;
      }, (0, _clone3.default)(arr));
    }

    return arr;
  },
  $merge: function $merge(whatToMerge, obj) {
    var result = (0, _clone3.default)(obj);
    var isChanged = false;

    (0, _each3.default)(whatToMerge, function (v, k) {
      result[k] = v;
      isChanged = isChanged || v !== obj[k];
    });

    return isChanged ? result : obj;
  }
};

function Immutable(props) {
  if (!(this instanceof Immutable)) return new Immutable(props);
  (0, _assign3.default)(this, props);
  if (devMode) Object.freeze(this);
}

Immutable.prototype = {
  select: function select(path) {
    return makeImmutable((0, _get3.default)(this, path));
  },
  update: function update(spec) {
    return makeImmutable(_update(this, spec));
  },
  set: function set(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $set: a } : (0, _set3.default)({}, a, { $set: b })));
  },
  concat: function concat(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $concat: a } : (0, _set3.default)({}, a, { $concat: b })));
  },
  splice: function splice(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $splice: a } : (0, _set3.default)({}, a, { $splice: b })));
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

    return makeImmutable(_update(this, arguments.length === 1 ? { $apply: mapWith(a) } : (0, _set3.default)({}, a, { $apply: mapWith(b) })));
  },
  merge: function merge(a, b) {
    return makeImmutable(_update(this, arguments.length === 1 ? { $merge: a } : (0, _set3.default)({}, a, { $merge: b })));
  }
};

function makeImmutable(arg) {
  if (arg instanceof Immutable) return arg;
  return new Immutable(arg);
}

function unwrapImmutable(arg) {
  if (arg instanceof Immutable) return (0, _clone3.default)(arg);
  return arg;
}

/***/ },

/***/ 8:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },

/***/ 9:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }

/******/ })
});
;