'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(["\n  .pane {\n    position: relative;\n    overflow-y: auto;\n    flex: 1;\n    border-left: 1px solid ", ";\n  }\n\n  .pane:first-child {\n    border-left: 0;\n  }\n\n  .small {\n    max-width: 220px;\n    min-width: 150px;\n  }\n\n  .mini {\n    width: 80px;\n    flex: none;\n  }\n\n  .fourth {\n    width: 25%;\n    flex: none;\n  }\n\n  .third {\n    width: 33.3%;\n    flex: none;\n  }\n"], ["\n  .pane {\n    position: relative;\n    overflow-y: auto;\n    flex: 1;\n    border-left: 1px solid ", ";\n  }\n\n  .pane:first-child {\n    border-left: 0;\n  }\n\n  .small {\n    max-width: 220px;\n    min-width: 150px;\n  }\n\n  .mini {\n    width: 80px;\n    flex: none;\n  }\n\n  .fourth {\n    width: 25%;\n    flex: none;\n  }\n\n  .third {\n    width: 33.3%;\n    flex: none;\n  }\n"]);

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

exports['default'] = Pane;