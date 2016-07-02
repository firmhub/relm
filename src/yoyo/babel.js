import es2015 from 'babel-preset-es2015';
import syntaxJsx from 'babel-plugin-syntax-jsx';
import transformJsx from 'babel-plugin-transform-react-jsx';
import pragmaticJsx from 'babel-plugin-jsx-pragmatic';

export default {
  plugins: [].concat(es2015.plugins, [
    syntaxJsx,
    [transformJsx, {
      pragma: 'dom'
    }],
    [pragmaticJsx, {
      module: './jsx.js',
      import: 'dom'
    }]
  ])
};
