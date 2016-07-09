'use strict';

var _babelPluginSyntaxJsx = require('babel-plugin-syntax-jsx');

var _babelPluginSyntaxJsx2 = _interopRequireDefault(_babelPluginSyntaxJsx);

var _babelPluginTransformReactJsx = require('babel-plugin-transform-react-jsx');

var _babelPluginTransformReactJsx2 = _interopRequireDefault(_babelPluginTransformReactJsx);

var _babelPluginJsxPragmatic = require('babel-plugin-jsx-pragmatic');

var _babelPluginJsxPragmatic2 = _interopRequireDefault(_babelPluginJsxPragmatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  plugins: [_babelPluginSyntaxJsx2.default, [_babelPluginTransformReactJsx2.default, { pragma: 'jsx' }], [_babelPluginJsxPragmatic2.default, { module: 'relm/inferno/jsx', import: 'jsx', export: 'jsx' }]]
};
