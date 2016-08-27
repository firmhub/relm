(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ViewPlugin"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["ViewPlugin"] = factory();
})(this, function() {
return webpackJsonprelm__name_([16],{

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_reduce__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isArray__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isPlainObject__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_isPlainObject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_isPlainObject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_get__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_assign__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_each__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash_each___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash_each__);
/* harmony export */ exports["extendHyperscript"] = extendHyperscript;
/* harmony export */ __webpack_require__.d(exports, "internals", function() { return internals; });






var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
          tasks: view.tasks,
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

      // Assign components to h and components object in one pass
      __WEBPACK_IMPORTED_MODULE_5_lodash_each___default()(component.components, function assignChildComponents(child, key) {
        components[key] = h[key] = child.view;
        child.view.displayName = key;
      });

      // Closure elimination - assign necessary props to the view fn
      __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()(component.view, {
        render: source.bind(null, h),
        displayName: source.displayName || source.name,
        actions: component.actions,
        tasks: component.tasks,
        styles: styles,
        components: components,
        getState: !component.path.length ? function () {
          return root.getState();
        } : function () {
          return __WEBPACK_IMPORTED_MODULE_3_lodash_get___default()(root.getState(), component.path) || component.init();
        }
      });
    }
  }]);

  return ViewPlugin;
}();

/* harmony default export */ exports["default"] = ViewPlugin;


function extendHyperscript(createElement) {
  var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var components = config.components || {};
  var styles = config.styles || {};

  return function hyperscript() {
    var selector = arguments[0];
    var attrs = {};
    var children = [];

    // Attributes (second hyperscript arg) are optional
    if (__WEBPACK_IMPORTED_MODULE_2_lodash_isPlainObject___default()(arguments[1])) {
      __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()(attrs, arguments[1]);
    } else if (__WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(arguments[1])) {
      children.push.apply(children, _toConsumableArray(arguments[1]));
    } else {
      children.push(arguments[1]);
    }

    // Filter and flatten children
    for (var i = 2, n = arguments.length; i < n; i++) {
      var child = arguments[i];

      // Filter falsey children (null, undefined, false)
      if (!child && typeof child !== 'string') continue;

      if (__WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(child)) {
        children.push.apply(children, _toConsumableArray(child.filter(Boolean)));
      } else {
        children.push(child);
      }
    }

    // Support extended tag syntax
    if (typeof selector === 'string') {
      var parsed = parseTag(selector);
      // Attributes can be defined in selector as key value pairs or using # for id
      if (parsed.attrs) __WEBPACK_IMPORTED_MODULE_4_lodash_assign___default()(attrs, parsed.attrs);

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

  if (__WEBPACK_IMPORTED_MODULE_1_lodash_isArray___default()(source)) {
    return __WEBPACK_IMPORTED_MODULE_0_lodash_reduce___default()(source, function cat(agg, it) {
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

var internals = {
  parseTag: parseTag,
  extendHyperscript: extendHyperscript,
  joinClasses: joinClasses
};

/***/ }

},[52])
});
;