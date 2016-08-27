(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Nav"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["Nav"] = factory();
})(this, function() {
return webpackJsonprelm__name_([11],{

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export */ exports["default"] = Nav;var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(["\n  .group {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 2px 10px 2px 25px;\n    display: block;\n    color: ", ";\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .item:active, .item.active {\n    background-color: #dcdfe1;\n  }\n\n  .item .icon {\n    width: 19px; /* Prevents a one pixel cutoff */\n    height: 18px;\n    float: left;\n    color: #737475;\n    margin-top: -3px;\n    margin-right: 7px;\n    font-size: 18px;\n    text-align: center;\n  }\n\n  .title {\n    margin: 0;\n    padding: 10px 10px 2px;\n    font-size: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n"], ["\n  .group {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 2px 10px 2px 25px;\n    display: block;\n    color: ", ";\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .item:active, .item.active {\n    background-color: #dcdfe1;\n  }\n\n  .item .icon {\n    width: 19px; /* Prevents a one pixel cutoff */\n    height: 18px;\n    float: left;\n    color: #737475;\n    margin-top: -3px;\n    margin-right: 7px;\n    font-size: 18px;\n    text-align: center;\n  }\n\n  .title {\n    margin: 0;\n    padding: 10px 10px 2px;\n    font-size: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n"]);

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

/***/ }

},[318])
});
;