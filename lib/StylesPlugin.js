(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/defaults"), require("lodash/isFunction"), require("lodash/mapValues"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/defaults", "lodash/isFunction", "lodash/mapValues"], factory);
	else if(typeof exports === 'object')
		exports["StylesPlugin"] = factory(require("lodash/defaults"), require("lodash/isFunction"), require("lodash/mapValues"));
	else
		root["StylesPlugin"] = factory(root["lodash/defaults"], root["lodash/isFunction"], root["lodash/mapValues"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_1__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },

/***/ 12:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },

/***/ 20:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaults2 = __webpack_require__(12);

var _defaults3 = _interopRequireDefault(_defaults2);

var _isFunction2 = __webpack_require__(20);

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _mapValues2 = __webpack_require__(1);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StylesPlugin = function () {
  function StylesPlugin(tag) {
    var theme = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, StylesPlugin);

    this.tag = tag;
    this.theme = theme;
  }

  _createClass(StylesPlugin, [{
    key: 'apply',
    value: function apply(component, source) {
      if (!this.tag) {
        component.styles = {};
        return;
      }

      var childStyles = (0, _mapValues3.default)(component.components, function (x) {
        return x.styles || {};
      });
      if (!(0, _isFunction3.default)(source.styles)) {
        component.styles = childStyles;
      } else {
        var result = source.styles(this.tag, {
          components: childStyles,
          theme: this.theme
        });

        component.styles = (0, _defaults3.default)(result || {}, childStyles);
      }
    }
  }]);

  return StylesPlugin;
}();

exports.default = StylesPlugin;

/***/ }

/******/ })
});
;