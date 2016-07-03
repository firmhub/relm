'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var syntaxJsx = _interopDefault(require('babel-plugin-syntax-jsx'));
var transformJsx = _interopDefault(require('babel-plugin-transform-react-jsx'));
var pragmaticJsx = _interopDefault(require('babel-plugin-jsx-pragmatic'));

var preset = {
  plugins: [syntaxJsx, [transformJsx, { pragma: 'jsx' }], [pragmaticJsx, { module: 'relm/yoyo', import: 'jsx', export: 'jsx' }]]
};

module.exports = preset;