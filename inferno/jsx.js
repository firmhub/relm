'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsx = jsx;

var _infernoCreateElement = require('inferno-create-element');

var _infernoCreateElement2 = _interopRequireDefault(_infernoCreateElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function jsx(tag, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (tag instanceof Function) return tag(props, children); // Sub-components
  return _infernoCreateElement2.default.apply(undefined, [tag, props].concat(children));
}
