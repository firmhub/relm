(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/get"), require("lodash/initial"), require("lodash/isArray"), require("lodash/last"), require("lodash/startsWith"), require("lodash/without"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/get", "lodash/initial", "lodash/isArray", "lodash/last", "lodash/startsWith", "lodash/without"], factory);
	else if(typeof exports === 'object')
		exports["TasksPlugin"] = factory(require("lodash/get"), require("lodash/initial"), require("lodash/isArray"), require("lodash/last"), require("lodash/startsWith"), require("lodash/without"));
	else
		root["TasksPlugin"] = factory(root["lodash/get"], root["lodash/initial"], root["lodash/isArray"], root["lodash/last"], root["lodash/startsWith"], root["lodash/without"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_76__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_32__, __WEBPACK_EXTERNAL_MODULE_79__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 131);
/******/ })
/************************************************************************/
/******/ ({

/***/ 131:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internals = undefined;

var _without2 = __webpack_require__(79);

var _without3 = _interopRequireDefault(_without2);

var _startsWith2 = __webpack_require__(32);

var _startsWith3 = _interopRequireDefault(_startsWith2);

var _get2 = __webpack_require__(2);

var _get3 = _interopRequireDefault(_get2);

var _initial2 = __webpack_require__(76);

var _initial3 = _interopRequireDefault(_initial2);

var _last2 = __webpack_require__(26);

var _last3 = _interopRequireDefault(_last2);

var _isArray2 = __webpack_require__(4);

var _isArray3 = _interopRequireDefault(_isArray2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TasksPlugin = function () {
  function TasksPlugin() {
    _classCallCheck(this, TasksPlugin);
  }

  _createClass(TasksPlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      if (component === root) {
        component.middleware = function (store) {
          return function (next) {
            return function (action) {
              // Skip non-relm or non-async actions; async actions are ones where the
              // action name (last item in type array) starts with a $ sign
              if (!(0, _isArray3.default)(action.type)) return next(action);
              if (!isAsyncAction((0, _last3.default)(action.type))) return next(action);

              // Get the path of the component
              var path = (0, _initial3.default)(action.type);

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
                  return (0, _get3.default)(store.getState(), path);
                },
                actions: targetComponent.actions,
                queries: targetComponent.queries
              };

              handleAsyncAction(task, source, action.type, action.args);
            };
          };
        };
      }
    }
  }]);

  return TasksPlugin;
}();

exports.default = TasksPlugin;


function isAsyncAction(name) {
  return (0, _startsWith3.default)(name, '$');
}

function handleWith(task, handler, args) {
  task.instances = handler.instances = handler.instances || [];
  task.isRunning = task.instances.length > 0;

  task.done = function done() {
    handler.instances = (0, _without3.default)(handler.instances, task);
    return task.done;
  };

  task.cancel = function cancel() {
    handler.instances = (0, _without3.default)(handler.instances, task);
    if (task.onCancel) task.onCancel();
  };

  var result = handler.apply(undefined, [task].concat(_toConsumableArray(args)));
  if (result === task.done) return 'task:done';
  if (result === void 0) return 'task:relay';
  if (typeof result === 'function') task.onCancel = result;
  return result;
}

function handleAsyncAction(task, component, type) {
  var args = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];

  var _type = _toArray(type);

  var head = _type[0];

  var tail = _type.slice(1);

  // Own action


  var ownAction = (0, _get3.default)(component.actions, head);
  if (ownAction) return handleWith(task, ownAction, args);

  // Child override
  var override = (0, _get3.default)(component.overrides, type);
  if (override) {
    var result = handleWith(task, override, args);
    if (result !== void 0) return result;
  }

  // Child action
  var child = (0, _get3.default)(component.components, head);
  if (child) return handleAsyncAction(task, child, tail, args);

  throw new Error('Unable to find action ' + head);
}

var internals = exports.internals = {
  handleWith: handleWith,
  handleAsyncAction: handleAsyncAction
};

/***/ },

/***/ 2:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 26:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ },

/***/ 32:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_32__;

/***/ },

/***/ 4:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },

/***/ 76:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_76__;

/***/ },

/***/ 79:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_79__;

/***/ }

/******/ })
});
;