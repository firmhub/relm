(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ui/index"] = factory();
	else
		root["ui/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 136);
/******/ })
/************************************************************************/
/******/ ({

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Input = exports.Radio = exports.Checkbox = exports.Nav = exports.PaneGroup = exports.Pane = exports.Flexbox = exports.Window = undefined;

var _Window = __webpack_require__(43);

var _Window2 = _interopRequireDefault(_Window);

var _Flexbox = __webpack_require__(37);

var _Flexbox2 = _interopRequireDefault(_Flexbox);

var _Pane = __webpack_require__(40);

var _Pane2 = _interopRequireDefault(_Pane);

var _PaneGroup = __webpack_require__(41);

var _PaneGroup2 = _interopRequireDefault(_PaneGroup);

var _Nav = __webpack_require__(39);

var _Nav2 = _interopRequireDefault(_Nav);

var _Checkbox = __webpack_require__(36);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Radio = __webpack_require__(42);

var _Radio2 = _interopRequireDefault(_Radio);

var _Input = __webpack_require__(38);

var _Input2 = _interopRequireDefault(_Input);

var _Button = __webpack_require__(35);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Window = _Window2.default; /* eslint-disable no-multi-spaces */

exports.Flexbox = _Flexbox2.default;
exports.Pane = _Pane2.default;
exports.PaneGroup = _PaneGroup2.default;
exports.Nav = _Nav2.default;
exports.Checkbox = _Checkbox2.default;
exports.Radio = _Radio2.default;
exports.Input = _Input2.default;
exports.Button = _Button2.default;

/***/ },

/***/ 35:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['.button{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;letter-spacing:.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}.button:hover,button:focus{color:#333;border-color:#888;outline:0}.primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}.primary:focus,.primary:hover{color:#fff;background-color:#1eaedb;border-color:#1eaedb}'], ['.button{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;letter-spacing:.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}.button:hover,button:focus{color:#333;border-color:#888;outline:0}.primary{color:#fff;background-color:#33c3f0;border-color:#33c3f0}.primary:focus,.primary:hover{color:#fff;background-color:#1eaedb;border-color:#1eaedb}']);

exports.default = Button;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Button(h, _ref) {
  var styles = _ref.styles;
  var props = _ref.props;
  var children = _ref.children;

  return h(
    'button',
    _extends({ type: 'button' }, props, { className: [styles.button, props.className] }),
    children
  );
}

Button.styles = function (css) {
  return css(_templateObject);
};

/***/ },

/***/ 36:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['.toggle{text-align:center;width:40px;height:auto;position:absolute;top:5px;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.toggle:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')}.toggle:checked:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')}'], ['.toggle{text-align:center;width:40px;height:auto;position:absolute;top:5px;margin:auto 0;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.toggle:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\')}.toggle:checked:after{content:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\')}']);

exports.default = Checkbox;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Checkbox(h, _ref) {
  var props = _ref.props;
  var styles = _ref.styles;

  return h('input', _extends({ className: styles.toggle, type: 'checkbox' }, props));
}

Checkbox.styles = function (css) {
  return css(_templateObject);
};

/***/ },

/***/ 37:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['.Flexbox{display:-ms-flexbox;display:flex;box-sizing:border-box;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between}'], ['.Flexbox{display:-ms-flexbox;display:flex;box-sizing:border-box;-ms-flex:1 0 auto;flex:1 0 auto;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-align:stretch;align-items:stretch;-ms-flex-line-pack:justify;align-content:space-between;-ms-flex-pack:justify;justify-content:space-between}']);

exports.default = Flexbox;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Flexbox(h, _ref) {
  var props = _ref.props;
  var children = _ref.children;
  var styles = _ref.styles;

  props.style = Object.assign(flex(props), props.style);
  props.className = [props.className, styles.Flexbox];
  return h(
    'div',
    props,
    children
  );
}

Flexbox.styles = function (css) {
  return css(_templateObject);
};

function flex(props) {
  var css = { flexDirection: Boolean(props.row) ? 'row' : 'column' };

  if (props.auto) css.flex = '0 0 auto';

  if (Number.isFinite(props.width)) {
    css.flexGrow = props.width;
    return css;
  }

  if (!props.width && !props.height) return css;

  css.flexBasis = 'auto';
  css.flexGrow = 0;
  css.flexShrink = 0;

  if (props.width) css.width = props.width;
  if (props.height) css.height = props.height;

  return css;
}

/***/ },

/***/ 38:
/***/ function(module, exports) {

"use strict";
"use strict";

/***/ },

/***/ 39:
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral([".group{font-size:14px}.item{padding:2px 10px 2px 25px;display:block;color:", ";text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item.active,.item:active{background-color:#dcdfe1}.item .icon{width:19px;height:18px;float:left;color:#737475;margin-top:-3px;margin-right:7px;font-size:18px;text-align:center}.title{margin:0;padding:10px 10px 2px;font-size:12px;font-weight:500;color:", "}"], [".group{font-size:14px}.item{padding:2px 10px 2px 25px;display:block;color:", ";text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.item.active,.item:active{background-color:#dcdfe1}.item .icon{width:19px;height:18px;float:left;color:#737475;margin-top:-3px;margin-right:7px;font-size:18px;text-align:center}.title{margin:0;padding:10px 10px 2px;font-size:12px;font-weight:500;color:", "}"]);

exports.default = Nav;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Nav(h, _ref) {
  var styles = _ref.styles;
  var props = _ref.props;
  var children = _ref.children;

  return h(
    "nav",
    _extends({}, props || {}, { className: [styles.group, props.className] }),
    children
  );
}

Nav.styles = function (css, _ref2) {
  var theme = _ref2.theme;
  return css(_templateObject, theme.grayColor, theme.grayColor);
};

/***/ },

/***/ 40:
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral([".pane{position:relative;overflow-y:auto;-ms-flex:1;flex:1;border-left:1px solid ", "}.pane:first-child{border-left:0}.small{max-width:220px;min-width:150px}.fourth,.mini,.third{width:80px;-ms-flex:none;flex:none}.fourth,.third{width:25%}.third{width:33.3%}"], [".pane{position:relative;overflow-y:auto;-ms-flex:1;flex:1;border-left:1px solid ", "}.pane:first-child{border-left:0}.small{max-width:220px;min-width:150px}.fourth,.mini,.third{width:80px;-ms-flex:none;flex:none}.fourth,.third{width:25%}.third{width:33.3%}"]);

exports.default = Pane;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Pane(h, _ref) {
  var styles = _ref.styles;
  var props = _ref.props;
  var children = _ref.children;

  return h(
    "div",
    _extends({}, props, { className: [styles.pane, props.className, styles[props.size]] }),
    children
  );
}

Pane.styles = function (css, _ref2) {
  var theme = _ref2.theme;
  return css(_templateObject, theme.borderColor);
};

/***/ },

/***/ 41:
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral([".paneGroup{position:absolute;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex}"], [".paneGroup{position:absolute;top:0;right:0;bottom:0;left:0;display:-ms-flexbox;display:flex}"]);

exports.default = PaneGroup;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function PaneGroup(h, _ref) {
  var styles = _ref.styles;
  var props = _ref.props;
  var children = _ref.children;

  return h(
    "div",
    _extends({}, props, { className: [styles.paneGroup, props.className] }),
    children
  );
}

PaneGroup.styles = function (css) {
  return css(_templateObject);
};

/***/ },

/***/ 42:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['.container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-bottom:1px solid #ededed}.radio{margin-left:1rem;margin-right:-2.5rem;cursor:inherit}.label{-ms-flex:1;flex:1;color:#4d4d4d;white-space:pre-line;word-break:break-word;padding:.5rem 1rem .5rem 3.5rem;transition:all .4s;cursor:inherit}'], ['.container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-bottom:1px solid #ededed}.radio{margin-left:1rem;margin-right:-2.5rem;cursor:inherit}.label{-ms-flex:1;flex:1;color:#4d4d4d;white-space:pre-line;word-break:break-word;padding:.5rem 1rem .5rem 3.5rem;transition:all .4s;cursor:inherit}']);

exports.default = Radio;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Radio(h, _ref) {
  var props = _ref.props;
  var styles = _ref.styles;

  var id = props.name + '_' + props.value;
  var classes = [styles.container, props.className, _defineProperty({}, styles.disabled, props.disabled)];

  return h(
    'li',
    { className: classes },
    h('input', {
      className: styles.radio,
      type: 'radio',
      id: id,
      name: props.name,
      disabled: props.disabled,
      value: props.value,
      checked: props.checked,
      onChange: props.onChange
    }),
    h(
      'label',
      _extends({ className: styles.label }, { for: id }),
      props.label
    )
  );
}

Radio.styles = function (css) {
  return css(_templateObject);
};

/***/ },

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