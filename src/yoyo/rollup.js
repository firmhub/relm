import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  format: 'cjs',
  plugins: [
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    }),
    nodeResolve({
      skip: [
        'lodash',
        'babel-plugin-syntax-jsx',
        'babel-plugin-transform-react-jsx',
        'babel-plugin-jsx-pragmatic',
      ]
    }),
  ]
};
