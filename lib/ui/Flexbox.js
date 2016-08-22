'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var _templateObject = taggedTemplateLiteral(['\n  .Flexbox {\n    display: flex;\n    box-sizing: border-box;\n    flex: 1 0 auto;\n    flex-wrap: nowrap;\n    align-items: stretch;\n    align-content: space-between;\n    justify-content: space-between;\n  }\n'], ['\n  .Flexbox {\n    display: flex;\n    box-sizing: border-box;\n    flex: 1 0 auto;\n    flex-wrap: nowrap;\n    align-items: stretch;\n    align-content: space-between;\n    justify-content: space-between;\n  }\n']);

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

exports['default'] = Flexbox;