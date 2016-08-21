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

var _templateObject = taggedTemplateLiteral(["\n  .paneGroup {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n  }\n"], ["\n  .paneGroup {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n  }\n"]);

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

exports['default'] = PaneGroup;