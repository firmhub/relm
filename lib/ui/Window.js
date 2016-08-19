(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ui/Window"] = factory();
	else
		root["ui/Window"] = factory();
})(this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ({

/***/ 43:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['.container{display:block;margin:-2rem -2rem 0;padding:.5rem 1rem}.title{color:#e8eaf6;color:rgba(255,255,255,.9)}'], ['.container{display:block;margin:-2rem -2rem 0;padding:.5rem 1rem}.title{color:#e8eaf6;color:rgba(255,255,255,.9)}']),
    _templateObject2 = _taggedTemplateLiteral(['.content,.window{display:-ms-flexbox;display:flex}.window{top:0;right:0;bottom:0;left:0;-ms-flex-direction:column;flex-direction:column;background-color:', ';position:absolute}.content{position:relative;overflow-y:auto;-ms-flex:1;flex:1}'], ['.content,.window{display:-ms-flexbox;display:flex}.window{top:0;right:0;bottom:0;left:0;-ms-flex-direction:column;flex-direction:column;background-color:', ';position:absolute}.content{position:relative;overflow-y:auto;-ms-flex:1;flex:1}']);

exports.Header = Header;
exports.default = Window;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Header(h, _ref) {
  var props = _ref.props;
  var styles = _ref.styles;
  var title = props.title;


  var containerInlineStyle = { backgroundColor: props.color || '#3f51b5' };

  return h(
    'header',
    { className: styles.container, style: containerInlineStyle },
    !title ? null : h(
      'h1',
      { className: styles.title },
      title
    )
  );
}

Header.styles = function (css) {
  return css(_templateObject);
};

function Window(h, _ref2) {
  var styles = _ref2.styles;
  var props = _ref2.props;
  var children = _ref2.children;

  return h(
    'div',
    _extends({ className: [styles.window, props.className] }, props),
    h(
      'div',
      { className: styles.content },
      children
    )
  );
}

Window.styles = function (css, _ref3) {
  var theme = _ref3.theme;
  return css(_templateObject2, theme.chromeColor);
};

/***/ }

/******/ })
});
;