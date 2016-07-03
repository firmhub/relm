/* eslint-disable no-var, global-require */
var syntaxJsx = require('babel-plugin-syntax-jsx');
var transformJsx = require('babel-plugin-transform-react-jsx');
var pragmaticJsx = require('babel-plugin-jsx-pragmatic');

module.exports = {
  plugins: [
    syntaxJsx,
    [transformJsx, { pragma: 'jsx' }],
    [pragmaticJsx, { module: 'relm/yoyo/jsx', import: 'jsx' }]
  ]
};
