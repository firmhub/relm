(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/assign"), require("lodash/bind"), require("lodash/defaults"), require("lodash/each"), require("lodash/get"), require("lodash/isArray"), require("lodash/isPlainObject"), require("lodash/mapValues"), require("lodash/omit"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash/assign", "lodash/bind", "lodash/defaults", "lodash/each", "lodash/get", "lodash/isArray", "lodash/isPlainObject", "lodash/mapValues", "lodash/omit"], factory);
	else if(typeof exports === 'object')
		exports["TemplatePlugin"] = factory(require("lodash/assign"), require("lodash/bind"), require("lodash/defaults"), require("lodash/each"), require("lodash/get"), require("lodash/isArray"), require("lodash/isPlainObject"), require("lodash/mapValues"), require("lodash/omit"));
	else
		root["TemplatePlugin"] = factory(root["lodash/assign"], root["lodash/bind"], root["lodash/defaults"], root["lodash/each"], root["lodash/get"], root["lodash/isArray"], root["lodash/isPlainObject"], root["lodash/mapValues"], root["lodash/omit"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_72__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_78__) {
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

/***/ 12:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = undefined;

var _defaults2 = __webpack_require__(12);

var _defaults3 = _interopRequireDefault(_defaults2);

var _omit2 = __webpack_require__(78);

var _omit3 = _interopRequireDefault(_omit2);

var _each2 = __webpack_require__(8);

var _each3 = _interopRequireDefault(_each2);

var _mapValues2 = __webpack_require__(1);

var _mapValues3 = _interopRequireDefault(_mapValues2);

var _bind2 = __webpack_require__(72);

var _bind3 = _interopRequireDefault(_bind2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TemplatePluginT = __webpack_require__(34);

var _TemplatePluginT2 = _interopRequireDefault(_TemplatePluginT);

var _infernoCreateElement = __webpack_require__(24);

var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

var _ViewPlugin = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

global.t7 = _TemplatePluginT2.default;


function transformAttributes(attrs, k) {
  var v = this[k];

  // Remove nil attributes
  if (v === null || v === void 0) return attrs;

  switch (k) {
    case 'onLoad':
      attrs.onAttached = v;break;
    case 'onUnload':
      attrs.onWillDetach = v;break;
    default:
      attrs[k] = v;
  }

  return attrs;
}

var createElement = exports.createElement = (0, _ViewPlugin.extendHyperscript)(function infernoEl(tag, props) {
  var attrs = Object.keys(props || {}).reduce((0, _bind3.default)(transformAttributes, props), {});

  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return _infernoCreateElement2.default.apply(undefined, [tag, attrs].concat(children));
});

var TemplatePlugin = function () {
  function TemplatePlugin() {
    _classCallCheck(this, TemplatePlugin);
  }

  _createClass(TemplatePlugin, [{
    key: 'apply',
    value: function apply(component, source) {
      var render = void 0;

      var views = (0, _mapValues3.default)(component.components, function (child, key) {
        child.view.displayName = key;
        return child.view;
      });

      _TemplatePluginT2.default.module(function (tag) {
        (0, _each3.default)(views, function (view, key) {
          return tag.assign(key, view);
        });
        render = source.bind(null, tag);
      });

      component.view = function view(propsArg) {
        for (var _len2 = arguments.length, children = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          children[_key2 - 1] = arguments[_key2];
        }

        var props = (0, _omit3.default)(propsArg || {}, 'styles');
        var styles = (0, _defaults3.default)(props.styles || {}, component.styles);

        return render({
          actions: component.actions,
          state: component.state, // <- getter
          styles: styles,
          components: views,
          props: props,
          children: children
        });
      };
    }
  }]);

  return TemplatePlugin;
}();

exports.default = TemplatePlugin;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ },

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

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

module.exports = __webpack_require__(45);

/***/ },

/***/ 31:
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },

/***/ 34:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = t7;
/*

  t7.js is a small, lightweight library for compiling ES2015 template literals
  into virtual DOM objects.

  By Dominic Gannaway

*/
/* eslint-env browser */
/* eslint no-param-reassign:0, prefer-template:0, no-console:0, func-names:0 */

//we store created functions in the cache (key is the template string)
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
//to save time later, we can pre-create a props object structure to re-use
var output = null;
var precompile = false;

var docHead = null;
if (isBrowser === true) docHead = document.getElementsByTagName('head')[0];

var selfClosingTags = {
  area: true,
  base: true,
  basefont: true,
  br: true,
  col: true,
  command: true,
  embed: true,
  frame: true,
  hr: true,
  img: true,
  input: true,
  isindex: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true,

  //common self closing svg elements
  path: true,
  circle: true,
  ellipse: true,
  line: true,
  rect: true,
  use: true,
  stop: true,
  polyline: true,
  polygon: true
};

//when creating a new function from a vdom, we'll need to build the vdom's children
function buildUniversalChildren(root, tagParams, childrenProp, component) {
  var childrenText = [];
  var i = 0;
  var n = 0;
  var matches = null;

  //if the node has children that is an array, handle it with a loop
  if (root.children != null && root.children instanceof Array) {
    for (i = 0, n = root.children.length; i < n; i++) {
      if (root.children[i] != null) {
        if (typeof root.children[i] === 'string') {
          root.children[i] = root.children[i].replace(/(\r\n|\n|\r)/gm, '');
          matches = root.children[i].match(/__\$props__\[\d*\]/g);
          if (matches !== null) {
            childrenText.push(root.children[i]);
          } else {
            childrenText.push("'" + root.children[i] + "'");
          }
        } else {
          buildFunction(root.children[i], childrenText, component); // eslint-disable-line
        }
      }
    }
    //push the children code into our tag params code
    if (childrenText.length === 1) {
      tagParams.push((childrenProp ? 'children: ' : '') + childrenText);
    } else if (childrenText.length > 1) {
      tagParams.push((childrenProp ? 'children: ' : '') + '[' + childrenText.join(',') + ']');
    }
  } else if (root.children != null && typeof root.children === 'string') {
    root.children = root.children.replace(/(\r\n|\n|\r)/gm, '').trim();
    //this ensures its a prop replacement
    matches = root.children.match(/__\$props__\[\d*\]/g);
    //find any template strings and replace them
    if (matches !== null) {
      root.children = root.children.replace(/(__\$props__\[.*\])/g, "',$1,'");
    }
    //if the last two characters are ,', replace them with nothing
    if (root.children.substring(root.children.length - 2) === ",'") {
      root.children = root.children.substring(0, root.children.length - 2);
      tagParams.push((childrenProp ? 'children: ' : '') + "['" + root.children + ']');
    } else {
      tagParams.push((childrenProp ? 'children: ' : '') + "['" + root.children + "']");
    }
  }
}

function isComponentName(tagName) {
  if (tagName[0] === tagName[0].toUpperCase()) {
    return true;
  }
  return false;
}

function joinAttrs(assignments, boundTemplateHelper) {
  if (!assignments || !assignments.length) return '{}';

  var str = 'Object.assign(';
  var insideLiteral = false;
  var matches = null;

  for (var i = 0, n = assignments.length; i < n; i++) {
    var it = assignments[i];
    if (typeof it === 'string') {
      if (insideLiteral) {
        str += ' },';
        insideLiteral = false;
      }
      str += it;
      if (i < n - 1) str += ', ';
    } else {
      if (!insideLiteral) {
        str += '{ ';
        insideLiteral = true;
      }
      matches = it[1].match(/__\$props__\[\d*\]/g);
      if (matches === null) {
        str += "'" + it[0] + "':'" + it[1] + "',";
      } else {
        str += "'" + it[0] + "':" + it[1] + ',';
        if (boundTemplateHelper) boundTemplateHelper(it[0], it[1]);
      }
    }
  }

  return str + (insideLiteral ? ' })' : ')');
}

//This takes a vDom array and builds a new function from it, to improve
//repeated performance at the cost of building new Functions()
function buildFunction(root, functionText, component) {
  var tagParams = [];

  if (root instanceof Array) {
    throw new Error('Adjacent elements are not allowed at the top level');
  }

  // Text entry
  if (!root.tag) {
    functionText.push("'" + root + "'");
    return;
  }

  // Component
  if (isComponentName(root.tag)) {
    if ((typeof window !== 'undefined' && component === window || component == null) && precompile === false) {
      throw new Error("Error referencing component '" + root.tag + "'. Components can only be used when within modules. See documentation for more information on t7.module().");
    }
    //we need to apply the tag components
    functionText.push('__$components__.' + root.tag + '(' + joinAttrs(root.assignments) + ')');
    return;
  }

  // we have a tag, add an element
  functionText.push("{tag: '" + root.tag + "'");
  //add the key
  if (root.key != null) {
    tagParams.push('key: ' + root.key);
  }
  //build the attrs
  if (root.assignments != null) {
    tagParams.push('attrs: ' + joinAttrs(root.assignments));
  }
  //build the children for this node
  buildUniversalChildren(root, tagParams, true, component);
  functionText.push(tagParams.join(',') + '}');
}

function handleChildTextPlaceholders(childText, parent /*, onlyChild*/) {
  var parts = childText.split(/(__\$props__\[\d*\])/g);
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].trim() !== '') {
      //set the children to this object
      parent.children.push(parts[i]);
    }
  }
  childText = null;

  return childText;
}

function replaceQuotes(string) {
  // string = string.replace(/'/g,"\\'")
  if (string.indexOf("'") > -1) {
    string = string.replace(/'/g, "\\'");
  }
  return string;
}

function applyValues(string, values) {
  var re = /__\$props__\[([0-9]*)\]/;

  var placeholders = string.match(/__\$props__\[([0-9]*)\]/g);
  if (!placeholders) return string;

  for (var i = 0; i < placeholders.length; i++) {
    var index = re.exec(placeholders[i])[1];
    string = string.replace(placeholders[i], values[index]);
  }
  return string;
}

function getVdom(html, values) {
  var char = '';
  var lastChar = ''; // eslint-disable-line
  var root = null;
  var insideTag = false;
  var tagContent = '';
  var tagName = '';
  var vElement = null;
  var childText = '';
  var parent = null;
  var tagData = null;
  var hasRootNodeAlready = false;

  for (var i = 0, n = html.length; i < n; i++) {
    //set the char to the current character in the string
    char = html[i];
    if (char === '<') {
      insideTag = true;
    } else if (char === '>' && insideTag === true) {
      //check if first character is a close tag
      if (tagContent[0] === '/') {
        //bad closing tag
        if (tagContent !== '/' + parent.tag && !selfClosingTags[parent.tag] && !parent.closed) {
          console.error('Template error: ' + applyValues(html, values));
          throw new Error("Expected corresponding t7 closing tag for '" + parent.tag + "'.");
        }
        //when the childText is not empty
        if (childText.trim() !== '') {
          //escape quotes etc
          childText = replaceQuotes(childText);
          //check if childText contains one of our placeholders
          childText = handleChildTextPlaceholders(childText, parent, true);
          if (childText !== null && parent.children.length === 0) {
            parent.children = childText;
          } else if (childText != null) {
            parent.children.push(childText);
          }
        }
        //move back up the vDom tree
        parent = parent.parent;
        if (parent) {
          parent.closed = true;
        }
      } else {
        //check if we have any content in the childText, if so, it was a text node that needs to be added
        if (childText.trim().length > 0 && !(parent instanceof Array)) {
          //escape quotes etc
          childText = replaceQuotes(childText);
          //check the childtext for placeholders
          childText = handleChildTextPlaceholders(childText.replace(/(\r\n|\n|\r)/gm, ''), parent);
          parent.children.push(childText);
          childText = '';
        }
        //check if there any spaces in the tagContent, if not, we have our tagName
        if (tagContent.indexOf(' ') === -1) {
          tagData = {};
          tagName = tagContent;
        } else {
          //get the tag data via the getTagData function
          tagData = getTagData(tagContent); // eslint-disable-line
          tagName = tagData.tag;
        }
        //now we create out vElement
        vElement = {
          tag: tagName,
          assignments: tagData && tagData.assignments ? tagData.assignments : null,
          children: [],
          closed: tagContent[tagContent.length - 1] === '/' || Boolean(selfClosingTags[tagName])
        };

        if (tagData && tagData.key) {
          vElement.key = tagData.key;
        }
        //push the node we've constructed to the relevant parent
        if (parent === null) {
          if (hasRootNodeAlready === true) {
            throw new Error('t7 templates must contain only a single root element');
          }
          hasRootNodeAlready = true;
          if (root === null && vElement.closed === false) {
            root = parent = vElement;
          } else {
            root = vElement;
          }
        } else if (parent instanceof Array) {
          parent.push(vElement);
        } else {
          parent.children.push(vElement);
        }
        if (!selfClosingTags[tagName] && vElement.closed === false) {
          //set our node's parent to our current parent
          if (parent === vElement) {
            vElement.parent = null;
          } else {
            vElement.parent = parent;
          }
          //now assign the parent to our new node
          parent = vElement;
        }
      }
      //reset our flags and strings
      insideTag = false;
      tagContent = '';
      childText = '';
    } else if (insideTag === true) {
      tagContent += char;
      lastChar = char;
    } else {
      childText += char;
      lastChar = char;
    }
  }
  //return the root (our constructed vDom)
  return root;
}

function getTagData(tagText) {
  var parts = [];
  var assignments = [];
  var char = '';
  var s = 0;
  var n2 = 0;
  var currentString = '';
  var inQuotes = false;
  var attrParts = [];
  var key = '';
  var lastChar = ''; // eslint-disable-line

  //build the parts of the tag
  for (var i = 0, n = tagText.length; i < n; i++) {
    char = tagText[i];

    if (char === ' ' && inQuotes === false) {
      parts.push(currentString);
      currentString = '';
    } else if (char === "'") {
      if (inQuotes === false) {
        inQuotes = true;
      } else {
        inQuotes = false;
        parts.push(currentString);
        currentString = '';
      }
    } else if (char === '"') {
      if (inQuotes === false) {
        inQuotes = true;
      } else {
        inQuotes = false;
        parts.push(currentString);
        currentString = '';
      }
    } else {
      currentString += char;
    }
  }

  if (currentString !== '') {
    parts.push(currentString);
  }
  currentString = '';

  //loop through the parts of the tag
  for (var _i = 1, _n = parts.length; _i < _n; _i++) {
    attrParts = [];
    lastChar = '';
    currentString = '';

    for (s = 0, n2 = parts[_i].length; s < n2; s++) {
      char = parts[_i][s];

      //if the character is =, then we're able to split the attribute name and value
      if (char === '=') {
        attrParts.push(currentString);
        currentString = '';
      } else {
        currentString += char;
        lastChar = char;
      }
    }

    if (currentString !== '') {
      attrParts.push(currentString);
    }
    if (attrParts.length > 1) {
      var matches = attrParts[1].match(/__\$props__\[\d*\]/g);
      if (matches !== null) {
        if (attrParts[0] === '@@assign') {
          assignments.push(attrParts[1]);
        } else {
          assignments.push(attrParts);
        }
      } else {
        assignments.push(attrParts);
        if (attrParts[0] === 'key') key = attrParts[1];
      }
    }
  }

  //return the attributes and the tag name
  return {
    tag: parts[0],
    key: key,
    assignments: assignments
  };
}

function addNewScriptFunction(scriptString, templateKey) {
  var funcCode = scriptString + '\n//# sourceURL=' + templateKey;
  var scriptElement = document.createElement('script');
  scriptElement.textContent = funcCode;
  docHead.appendChild(scriptElement);
}

function createTemplateKey(tpl) {
  var hash = 0;
  var i = void 0;
  var chr = void 0;
  var len = void 0;

  if (tpl.length === 0) return tpl;
  for (i = 0, len = tpl.length; i < len; i++) {
    chr = tpl.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
}

//main t7 compiling function
function t7(template) {
  var values = [].slice.call(arguments, 1);
  var fullHtml = null;
  var i = 1;
  var n = arguments.length;
  var functionString = null;
  var scriptString = null;
  var scriptCode = '';
  var templateKey = null;
  var tpl = template[0];

  //build the template string
  for (; i < n; i++) {
    tpl += template[i];
  }
  //set our unique key
  templateKey = createTemplateKey(tpl);

  //check if we have the template in cache
  if (t7._cache[templateKey] == null) {
    fullHtml = '';
    //put our placeholders around the template parts
    for (i = 0, n = template.length; i < n; i++) {
      if (i === template.length - 1) {
        fullHtml += template[i];
      } else if (template[i].slice(-4) === ' ...') {
        fullHtml += template[i].slice(0, template[i].length - 3) + '@@assign=__$props__[' + i + ']';
      } else {
        fullHtml += template[i] + '__$props__[' + i + ']';
      }
    }
    //once we have our vDom array, build an optimal function to improve performance
    functionString = [];
    buildFunction(
    //build a vDom from the HTML
    getVdom(fullHtml, values), functionString, this, templateKey);
    scriptCode = functionString.join(',');
    //build a new Function and store it depending if on node or browser
    if (precompile === true) {
      return {
        templateKey: templateKey,
        template: 'return ' + scriptCode
      };
    }

    if (isBrowser === true) {
      scriptString = 't7._cache["' + templateKey + '"]=function(__$props__, __$components__, t7)';
      scriptString += '{"use strict";return ' + scriptCode + '}';
      addNewScriptFunction(scriptString, templateKey);
    } else {
      t7._cache[templateKey] = new Function('"use strict";const __$props__ = arguments[0];const __$components__ = arguments[1];const t7 = arguments[2];return ' + scriptCode);
    }
  }
  return t7._cache[templateKey](values, this, t7);
}

t7._cache = {};
t7._templateCache = {};

t7.getTemplateCache = function (id) {
  return t7._templateCache[id];
};

t7.getOutput = function () {
  return output;
};

t7.setPrecompile = function (val) {
  precompile = val;
};

t7.clearCache = function () {
  t7._cache = {};
  t7._templateCache = {};
};

t7.assign = function (compName) {
  throw new Error("Error assigning component '" + compName + "'. You can only assign components from within a module. Please check documentation for t7.module().");
};

t7.module = function (callback) {
  var components = {};

  var instance = function instance() {
    return t7.apply(components, arguments);
  };

  instance.assign = function (name, val) {
    if (arguments.length === 2) {
      components[name] = val;
    } else {
      Object.assign(components, name);
    }
  };

  instance.loadComponent = function (name) {
    return components[name];
  };

  instance.clearCache = t7.clearCache;
  instance.precompile = t7.precompile;

  callback(instance);
};

/***/ },

/***/ 4:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

/*!
 * inferno-create-element v0.7.16
 * (c) 2016 Dominic Gannaway
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.InfernoCreateElement = factory());
}(this, function () { 'use strict';

	function isArray(obj) {
		return obj instanceof Array;
	}

	function isNullOrUndefined(obj) {
		return isUndefined(obj) || isNull(obj);
	}

	function isInvalidNode(obj) {
		return isNull(obj) || obj === false || obj === true || isUndefined(obj);
	}

	function isFunction(obj) {
		return typeof obj === 'function';
	}

	function isAttrAnEvent$1(attr) {
		return attr[0] === 'o' && attr[1] === 'n' && attr.length > 3;
	}

	function isNull(obj) {
		return obj === null;
	}

	function isUndefined(obj) {
		return obj === undefined;
	}

	function isAttrAHook$1(hook) {
		return hook === 'onCreated'
			|| hook === 'onAttached'
			|| hook === 'onWillDetach'
			|| hook === 'onWillUpdate'
			|| hook === 'onDidUpdate';
	}

	function isAttrAComponentHook$1(hook) {
		return hook === 'onComponentWillMount'
			|| hook === 'onComponentDidMount'
			|| hook === 'onComponentWillUnmount'
			|| hook === 'onComponentShouldUpdate'
			|| hook === 'onComponentWillUpdate'
			|| hook === 'onComponentDidUpdate';
	}

	function VNode(blueprint) {
		this.bp = blueprint;
		this.dom = null;
		this.instance = null;
		this.tag = null;
		this.children = null;
		this.style = null;
		this.className = null;
		this.attrs = null;
		this.events = null;
		this.hooks = null;
		this.key = null;
		this.clipData = null;
	}

	VNode.prototype = {
		setAttrs: function setAttrs(attrs) {
			this.attrs = attrs;
			return this;
		},
		setTag: function setTag(tag) {
			this.tag = tag;
			return this;
		},
		setStyle: function setStyle(style) {
			this.style = style;
			return this;
		},
		setClassName: function setClassName(className) {
			this.className = className;
			return this;
		},
		setChildren: function setChildren(children) {
			this.children = children;
			return this;
		},
		setHooks: function setHooks(hooks) {
			this.hooks = hooks;
			return this;
		},
		setEvents: function setEvents(events) {
			this.events = events;
			return this;
		},
		setKey: function setKey(key) {
			this.key = key;
			return this;
		}
	};

	function createVNode(bp) {
		return new VNode(bp);
	}

	function createAttrsAndEvents(props, tag) {
		var events = null;
		var hooks = null;
		var attrs = null;
		var className = null;
		var style = null;

		if (!isNullOrUndefined(props)) {
			if (isArray(props)) {
				return props;
			}
			for (var prop in props) {
				if (prop === 'className') {
					className = props[prop];
				} else if (prop === 'style') {
					style = props[prop];
				} else if (isAttrAHook$1(prop) && !isFunction(tag)) {
					if (isNullOrUndefined(hooks)) {
						hooks = {};
					}
					hooks[prop.substring(2).toLowerCase()] = props[prop];
					delete props[prop];
				} else if (isAttrAnEvent$1(prop) && !isFunction(tag)) {
					if (isNullOrUndefined(events)) {
						events = {};
					}
					events[prop.toLowerCase()] = props[prop];
					delete props[prop];
				} else if (isAttrAComponentHook$1(prop) && isFunction(tag)) {
					if (isNullOrUndefined(hooks)) {
						hooks = {};
					}
					hooks['c' + prop.substring(3)] = props[prop];
					delete props[prop];
				} else if (!isFunction(tag)) {
					if (isNullOrUndefined(attrs)) {
						attrs = {};
					}
					attrs[prop] = props[prop];
				} else {
					attrs = props;
				}
			}
		}
		return { attrs: attrs, events: events, className: className, style: style, hooks: hooks };
	}

	function createChild(ref) {
		var tag = ref.tag;
		var attrs = ref.attrs;
		var children = ref.children;
		var className = ref.className;
		var style = ref.style;
		var events = ref.events;
		var hooks = ref.hooks;

		if (tag === undefined && !isNullOrUndefined(attrs) && !attrs.tpl && !isNullOrUndefined(children) && children.length === 0) {
			return null;
		}
		var key = !isNullOrUndefined(attrs) && !isNullOrUndefined(attrs.key) ? attrs.key : undefined;

		if (!isNullOrUndefined(children) && children.length === 0) {
			children = null;
		} else if (!isInvalidNode(children)) {
			children = isArray(children) && children.length === 1 ? createChildren(children[0]) : createChildren(children);
		}

		if (key !== undefined) {
			delete attrs.key;
		}
		var attrsAndEvents = createAttrsAndEvents(attrs, tag);
		var vNode = createVNode();

		className = className || attrsAndEvents.className;
		style = style || attrsAndEvents.style;

		vNode.tag = tag || null;
		vNode.attrs = attrsAndEvents.attrs || null;
		vNode.events = attrsAndEvents.events || events;
		vNode.hooks = attrsAndEvents.hooks || hooks;
		vNode.children = children === undefined ? null : children;
		vNode.key = key === undefined ? null : key;
		vNode.className = className === undefined ? null : className;
		vNode.style = style === undefined ? null : style;

		return vNode;
	}

	function createChildren(children) {
		var childrenDefined = !isNullOrUndefined(children);
		if (childrenDefined && isArray(children)) {
			var newChildren = [];

			for (var i = 0; i < children.length; i++) {
				var child = children[i];
				if (!isNullOrUndefined(child) && typeof child === 'object') {
					if (isArray(child)) {
						if (child.length > 0) {
							newChildren.push(createChildren(child));
						} else {
							newChildren.push(null);
						}
					} else {
						newChildren.push(createChild(child));
					}
				} else {
					newChildren.push(child);
				}
			}
			return newChildren;
		} else if (childrenDefined && typeof children === 'object') {
			return children.dom === undefined ? createChild(children) : children;
		}
		return children;
	}

	function createElement(tag, props) {
		var children = [], len = arguments.length - 2;
		while ( len-- > 0 ) children[ len ] = arguments[ len + 2 ];

		return createChild({ tag: tag, attrs: props, children: children });
	}

	return createElement;

}));

/***/ },

/***/ 7:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ },

/***/ 72:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_72__;

/***/ },

/***/ 78:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_78__;

/***/ },

/***/ 8:
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }

/******/ })
});
;