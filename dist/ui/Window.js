(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Window"] = factory();
	else
		root["relm"] = root["relm"] || {}, root["relm"]["Window"] = factory();
})(this, function() {
return webpackJsonprelm__name_([1],{

/***/ 205:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export */ exports["Header"] = Header;/* harmony export */ exports["default"] = Window;var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n  .container {\n    display: block;\n    margin: -2rem -2rem 0 -2rem;\n    padding: 0.5rem 1rem;\n  }\n\n  .title {\n    color: #e8eaf6;\n    color: rgba(255, 255, 255, 0.9);\n  }\n'], ['\n  .container {\n    display: block;\n    margin: -2rem -2rem 0 -2rem;\n    padding: 0.5rem 1rem;\n  }\n\n  .title {\n    color: #e8eaf6;\n    color: rgba(255, 255, 255, 0.9);\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  .window {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: ', ';\n  }\n\n  .content {\n    position: relative;\n    overflow-y: auto;\n    display: flex;\n    flex: 1;\n  }\n'], ['\n  .window {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: ', ';\n  }\n\n  .content {\n    position: relative;\n    overflow-y: auto;\n    display: flex;\n    flex: 1;\n  }\n']);

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

},[205])
});
;