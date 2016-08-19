(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/assign"), require("lodash/each"), require("lodash/get"), require("lodash/isArray"), require("lodash/isPlainObject"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/assign", "lodash/each", "lodash/get", "lodash/isArray", "lodash/isPlainObject"], factory);
	else if(typeof exports === 'object')
		exports["ViewPlugin"] = factory(require("lodash/assign"), require("lodash/each"), require("lodash/get"), require("lodash/isArray"), require("lodash/isPlainObject"));
	else
		root["ViewPlugin"] = factory(root["lodash/assign"], root["lodash/each"], root["lodash/get"], root["lodash/isArray"], root["lodash/isPlainObject"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_18__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },

/***/ 2:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internals = undefined;

var _isArray2 = __webpack_require__(4);

var _isArray3 = _interopRequireDefault(_isArray2);

var _isPlainObject2 = __webpack_require__(18);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _get2 = __webpack_require__(2);

var _get3 = _interopRequireDefault(_get2);

var _assign2 = __webpack_require__(7);

var _assign3 = _interopRequireDefault(_assign2);

var _each2 = __webpack_require__(8);

var _each3 = _interopRequireDefault(_each2);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.extendHyperscript = extendHyperscript;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewPlugin = function () {
  function ViewPlugin(createElement) {
    _classCallCheck(this, ViewPlugin);

    this.createElement = createElement;
  }

  _createClass(ViewPlugin, [{
    key: 'apply',
    value: function apply(component, source, root) {
      component.view = function view(props) {
        for (var _len = arguments.length, children = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          children[_key - 1] = arguments[_key];
        }

        return view.render({
          props: props,
          children: children,
          actions: view.actions,
          state: view.getState(),
          styles: view.styles,
          components: view.components
        });
      };

      var components = {};
      var styles = component.styles;

      // Clone the tag function so we can assign components to it (i.e. h.Component syntax)
      var h = extendHyperscript(this.createElement, { components: components, styles: styles });
      Object.defineProperty(h, 'createElement', { value: this.createElement });

      // Optimization - assign components to h and components object in one pass
      (0, _each3.default)(component.components, function assignChildComponents(child, key) {
        components[key] = h[key] = child.view;
        child.view.displayName = key;
      });

      // Optimization - closure elimination - assign necessary props to the view fn
      (0, _assign3.default)(component.view, {
        render: source.bind(null, h),
        displayName: source.displayName || source.name,
        actions: component.actions,
        styles: styles,
        components: components,
        getState: !component.path.length ? function () {
          return root.getState();
        } : function () {
          return (0, _get3.default)(root.getState(), component.path) || component.init();
        }
      });
    }
  }]);

  return ViewPlugin;
}();

exports.default = ViewPlugin;
function extendHyperscript(createElement) {
  var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var components = config.components || {};
  var styles = config.styles || {};

  return function hyperscript() {
    var selector = arguments[0];
    var attrs = {};
    var children = [];

    // Attributes (second hyperscript arg) are optional
    if ((0, _isPlainObject3.default)(arguments[1])) {
      (0, _assign3.default)(attrs, arguments[1]);
    } else if ((0, _isArray3.default)(arguments[1])) {
      children.push.apply(children, _toConsumableArray(arguments[1]));
    } else {
      children.push(arguments[1]);
    }

    // Filter and flatten children
    for (var i = 2, n = arguments.length; i < n; i++) {
      var child = arguments[i];

      // Filter falsey children (null, undefined, false)
      if (!child && typeof child !== 'string') continue;

      if ((0, _isArray3.default)(child)) {
        children.push.apply(children, _toConsumableArray(child.filter(Boolean)));
      } else {
        children.push(child);
      }
    }

    // Support extended tag syntax
    if (typeof selector === 'string') {
      var parsed = parseTag(selector);
      // Attributes can be defined in selector as key value pairs or using # for id
      if (parsed.attrs) (0, _assign3.default)(attrs, parsed.attrs);

      // Classes can be defined using dot syntax
      if (parsed.classes) {
        if (!attrs.className) attrs.className = parsed.classes;else attrs.className = [attrs.className, parsed.classes];
      }

      // Allow components to be defined also as h('SomeComponent.class#id', ...)
      if (components.hasOwnProperty(parsed.tag)) {
        selector = components[parsed.tag];
      } else {
        selector = parsed.tag;
      }
    }

    // Join class names if not already joined
    attrs.className = joinClasses(styles, attrs.className);

    // Sub components
    if (selector instanceof Function) {
      return selector(attrs, children);
    }

    return createElement(selector, attrs, children);
  };
}

function parseTag(selector) {
  var tag = selector;
  var attrs = void 0;
  var classes = void 0;
  var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g;
  var match = void 0;

  // eslint-disable-next-line no-cond-assign
  while (match = parser.exec(selector)) {
    if (match[1] === '' && match[2]) {
      tag = match[2];
    } else if (match[1] === '#') {
      attrs = attrs || {};
      attrs.id = match[2];
    } else if (match[1] === '.') {
      classes = classes || [];
      classes.push(match[2]);
    } else if (match[3][0] === '[') {
      var pair = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(match[3]);
      attrs = attrs || {};
      attrs[pair[1]] = pair[3] || '';
    }
  }

  return { tag: tag, attrs: attrs, classes: classes };
}

function truthyKeys(it) {
  return Object.keys(it).filter(function (x) {
    return it[x];
  });
}

function classesToArray(source) {
  if (!source) return [];

  if (Array.isArray(source)) {
    return source.reduce(function cat(agg, it) {
      agg.push.apply(agg, classesToArray(it));
      return agg;
    }, []);
  }

  if (typeof source === 'string') return source.split(' ');
  if ((typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object') return truthyKeys(source);

  return [];
}

function joinClasses(styles, source) {
  return classesToArray(source).filter(Boolean).map(function (x) {
    return styles[x] || x;
  }).join(' ').trim();
}

var internals = exports.internals = {
  parseTag: parseTag,
  extendHyperscript: extendHyperscript,
  joinClasses: joinClasses
};

/***/ },

/***/ 4:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },

/***/ 7:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },

/***/ 8:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }

/******/ })
});
;