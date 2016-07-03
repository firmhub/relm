import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'js/app.js',
  dest: 'js/app.bundle.js',
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    commonjs(),
    nodeResolve()
  ]
};
