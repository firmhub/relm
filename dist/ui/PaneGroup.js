(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PaneGroup"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["PaneGroup"] = factory();
})(this, function() {
return webpackJsonprelm__name_([3],{

/***/ 203:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export */ exports["default"] = PaneGroup;var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n  .paneGroup {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n  }\n"], ["\n  .paneGroup {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n  }\n"]);

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

/***/ }

},[203])
});
;