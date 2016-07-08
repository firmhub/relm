import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  format: 'cjs',
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    commonjs(),
    nodeResolve()
  ]
};
