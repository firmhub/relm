(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["StylesPlugin"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["StylesPlugin"] = factory();
})(this, function() {
return webpackJsonprelm__name_([17],{

/***/ 51:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_defaults__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_mapValues__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_mapValues___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_mapValues__);




var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

      var childStyles = __WEBPACK_IMPORTED_MODULE_2_lodash_mapValues___default()(component.components, function (x) {
        return x.styles || {};
      });
      if (!__WEBPACK_IMPORTED_MODULE_1_lodash_isFunction___default()(source.styles)) {
        component.styles = childStyles;
      } else {
        var result = source.styles(this.tag, {
          components: childStyles,
          theme: this.theme
        });

        component.styles = __WEBPACK_IMPORTED_MODULE_0_lodash_defaults___default()(result || {}, childStyles);
      }
    }
  }]);

  return StylesPlugin;
}();

/* harmony default export */ exports["default"] = StylesPlugin;

/***/ }

},[51])
});
;