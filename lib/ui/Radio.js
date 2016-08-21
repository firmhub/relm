'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

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

var _templateObject = taggedTemplateLiteral(['\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-bottom: 1px solid #ededed;\n  }\n\n  .radio {\n    margin-left: 1rem;\n    margin-right: -2.5rem;\n    cursor: inherit;\n  }\n\n  .label {\n    flex: 1;\n    color: #4d4d4d;\n    white-space: pre-line;\n    word-break: break-word;\n    padding: 0.5rem 1rem 0.5rem 3.5rem;\n    transition: all 0.4s;\n    cursor: inherit;\n  }\n'], ['\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-bottom: 1px solid #ededed;\n  }\n\n  .radio {\n    margin-left: 1rem;\n    margin-right: -2.5rem;\n    cursor: inherit;\n  }\n\n  .label {\n    flex: 1;\n    color: #4d4d4d;\n    white-space: pre-line;\n    word-break: break-word;\n    padding: 0.5rem 1rem 0.5rem 3.5rem;\n    transition: all 0.4s;\n    cursor: inherit;\n  }\n']);

function Radio(h, _ref) {
  var props = _ref.props;
  var styles = _ref.styles;

  var id = props.name + '_' + props.value;
  var classes = [styles.container, props.className, defineProperty({}, styles.disabled, props.disabled)];

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

exports['default'] = Radio;