import syntaxJsx from 'babel-plugin-syntax-jsx';
import transformJsx from 'babel-plugin-transform-react-jsx';
import pragmaticJsx from 'babel-plugin-jsx-pragmatic';

module.exports = {
  plugins: [
    syntaxJsx,
    [transformJsx, { pragma: 'jsx' }],
    [pragmaticJsx, { module: 'relm/yoyo/jsx', import: 'jsx', export: 'jsx' }]
  ]
};
