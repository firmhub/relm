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

var _templateObject = taggedTemplateLiteral(['\n  .container {\n    display: block;\n    margin: -2rem -2rem 0 -2rem;\n    padding: 0.5rem 1rem;\n  }\n\n  .title {\n    color: #e8eaf6;\n    color: rgba(255, 255, 255, 0.9);\n  }\n'], ['\n  .container {\n    display: block;\n    margin: -2rem -2rem 0 -2rem;\n    padding: 0.5rem 1rem;\n  }\n\n  .title {\n    color: #e8eaf6;\n    color: rgba(255, 255, 255, 0.9);\n  }\n']);
var _templateObject2 = taggedTemplateLiteral(['\n  .window {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: ', ';\n  }\n\n  .content {\n    position: relative;\n    overflow-y: auto;\n    display: flex;\n    flex: 1;\n  }\n'], ['\n  .window {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background-color: ', ';\n  }\n\n  .content {\n    position: relative;\n    overflow-y: auto;\n    display: flex;\n    flex: 1;\n  }\n']);
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

var _templateObject$1 = taggedTemplateLiteral(['\n  .Flexbox {\n    display: flex;\n    box-sizing: border-box;\n    flex: 1 0 auto;\n    flex-wrap: nowrap;\n    align-items: stretch;\n    align-content: space-between;\n    justify-content: space-between;\n  }\n'], ['\n  .Flexbox {\n    display: flex;\n    box-sizing: border-box;\n    flex: 1 0 auto;\n    flex-wrap: nowrap;\n    align-items: stretch;\n    align-content: space-between;\n    justify-content: space-between;\n  }\n']);

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
  return css(_templateObject$1);
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

var _templateObject$2 = taggedTemplateLiteral(["\n  .pane {\n    position: relative;\n    overflow-y: auto;\n    flex: 1;\n    border-left: 1px solid ", ";\n  }\n\n  .pane:first-child {\n    border-left: 0;\n  }\n\n  .small {\n    max-width: 220px;\n    min-width: 150px;\n  }\n\n  .mini {\n    width: 80px;\n    flex: none;\n  }\n\n  .fourth {\n    width: 25%;\n    flex: none;\n  }\n\n  .third {\n    width: 33.3%;\n    flex: none;\n  }\n"], ["\n  .pane {\n    position: relative;\n    overflow-y: auto;\n    flex: 1;\n    border-left: 1px solid ", ";\n  }\n\n  .pane:first-child {\n    border-left: 0;\n  }\n\n  .small {\n    max-width: 220px;\n    min-width: 150px;\n  }\n\n  .mini {\n    width: 80px;\n    flex: none;\n  }\n\n  .fourth {\n    width: 25%;\n    flex: none;\n  }\n\n  .third {\n    width: 33.3%;\n    flex: none;\n  }\n"]);

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
  return css(_templateObject$2, theme.borderColor);
};

var _templateObject$3 = taggedTemplateLiteral(["\n  .paneGroup {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n  }\n"], ["\n  .paneGroup {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n  }\n"]);

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
  return css(_templateObject$3);
};

var _templateObject$4 = taggedTemplateLiteral(["\n  .group {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 2px 10px 2px 25px;\n    display: block;\n    color: ", ";\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .item:active, .item.active {\n    background-color: #dcdfe1;\n  }\n\n  .item .icon {\n    width: 19px; /* Prevents a one pixel cutoff */\n    height: 18px;\n    float: left;\n    color: #737475;\n    margin-top: -3px;\n    margin-right: 7px;\n    font-size: 18px;\n    text-align: center;\n  }\n\n  .title {\n    margin: 0;\n    padding: 10px 10px 2px;\n    font-size: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n"], ["\n  .group {\n    font-size: 14px;\n  }\n\n  .item {\n    padding: 2px 10px 2px 25px;\n    display: block;\n    color: ", ";\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .item:active, .item.active {\n    background-color: #dcdfe1;\n  }\n\n  .item .icon {\n    width: 19px; /* Prevents a one pixel cutoff */\n    height: 18px;\n    float: left;\n    color: #737475;\n    margin-top: -3px;\n    margin-right: 7px;\n    font-size: 18px;\n    text-align: center;\n  }\n\n  .title {\n    margin: 0;\n    padding: 10px 10px 2px;\n    font-size: 12px;\n    font-weight: 500;\n    color: ", ";\n  }\n"]);

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
  return css(_templateObject$4, theme.grayColor, theme.grayColor);
};

var _templateObject$5 = taggedTemplateLiteral(['\n  .toggle {\n    text-align: center;\n    width: 40px;\n    height: auto;\n    position: absolute;\n    top: 5px;\n    margin: auto 0;\n    border: none;\n    -webkit-appearance: none;\n    appearance: none;\n    outline: none;\n  }\n\n  .toggle:after {\n    content: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\');\n  }\n\n  .toggle:checked:after {\n    content: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\');\n  }\n'], ['\n  .toggle {\n    text-align: center;\n    width: 40px;\n    height: auto;\n    position: absolute;\n    top: 5px;\n    margin: auto 0;\n    border: none;\n    -webkit-appearance: none;\n    appearance: none;\n    outline: none;\n  }\n\n  .toggle:after {\n    content: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>\');\n  }\n\n  .toggle:checked:after {\n    content: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>\');\n  }\n']);

function Checkbox(h, _ref) {
  var props = _ref.props;
  var styles = _ref.styles;

  return h('input', _extends({ className: styles.toggle, type: 'checkbox' }, props));
}

Checkbox.styles = function (css) {
  return css(_templateObject$5);
};

var _templateObject$6 = taggedTemplateLiteral(['\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-bottom: 1px solid #ededed;\n  }\n\n  .radio {\n    margin-left: 1rem;\n    margin-right: -2.5rem;\n    cursor: inherit;\n  }\n\n  .label {\n    flex: 1;\n    color: #4d4d4d;\n    white-space: pre-line;\n    word-break: break-word;\n    padding: 0.5rem 1rem 0.5rem 3.5rem;\n    transition: all 0.4s;\n    cursor: inherit;\n  }\n'], ['\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-bottom: 1px solid #ededed;\n  }\n\n  .radio {\n    margin-left: 1rem;\n    margin-right: -2.5rem;\n    cursor: inherit;\n  }\n\n  .label {\n    flex: 1;\n    color: #4d4d4d;\n    white-space: pre-line;\n    word-break: break-word;\n    padding: 0.5rem 1rem 0.5rem 3.5rem;\n    transition: all 0.4s;\n    cursor: inherit;\n  }\n']);

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
  return css(_templateObject$6);
};

function Input() {}

var _templateObject$7 = taggedTemplateLiteral(['\n  .button {\n    display: inline-block;\n    height: 38px;\n    padding: 0 30px;\n    color: #555;\n    text-align: center;\n    font-size: 11px;\n    font-weight: 600;\n    line-height: 38px;\n    letter-spacing: .1rem;\n    text-transform: uppercase;\n    text-decoration: none;\n    white-space: nowrap;\n    background-color: transparent;\n    border-radius: 4px;\n    border: 1px solid #bbb;\n    cursor: pointer;\n    box-sizing: border-box; \n  }\n\n  .button:hover, button:focus {\n    color: #333;\n    border-color: #888;\n    outline: 0; \n  }\n\n  .primary {\n    color: #FFF;\n    background-color: #33C3F0;\n    border-color: #33C3F0; \n  }\n\n  .primary:hover, .primary:focus {\n    color: #FFF;\n    background-color: #1EAEDB;\n    border-color: #1EAEDB; \n  }\n'], ['\n  .button {\n    display: inline-block;\n    height: 38px;\n    padding: 0 30px;\n    color: #555;\n    text-align: center;\n    font-size: 11px;\n    font-weight: 600;\n    line-height: 38px;\n    letter-spacing: .1rem;\n    text-transform: uppercase;\n    text-decoration: none;\n    white-space: nowrap;\n    background-color: transparent;\n    border-radius: 4px;\n    border: 1px solid #bbb;\n    cursor: pointer;\n    box-sizing: border-box; \n  }\n\n  .button:hover, button:focus {\n    color: #333;\n    border-color: #888;\n    outline: 0; \n  }\n\n  .primary {\n    color: #FFF;\n    background-color: #33C3F0;\n    border-color: #33C3F0; \n  }\n\n  .primary:hover, .primary:focus {\n    color: #FFF;\n    background-color: #1EAEDB;\n    border-color: #1EAEDB; \n  }\n']);

function Button(h, _ref) {
  var styles = _ref.styles;
  var props = _ref.props;
  var children = _ref.children;

  return h(
    'button',
_extends({ type: 'button' }, props, { className: [styles.button, props.className] }),
    children
  );
}

Button.styles = function (css) {
  return css(_templateObject$7);
};

/* eslint-disable no-multi-spaces */

exports.Window = Window;
exports.Flexbox = Flexbox;
exports.Pane = Pane;
exports.PaneGroup = PaneGroup;
exports.Nav = Nav;
exports.Checkbox = Checkbox;
exports.Radio = Radio;
exports.Input = Input;
exports.Button = Button;