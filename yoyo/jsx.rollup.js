import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'yoyo/jsx.src.js',
  dest: 'yoyo/jsx.js',
  format: 'cjs',
  plugins: [
    babel({ exclude: 'node_modules/**' }),
    nodeResolve({ skip: ['yo-yo'] }),
    commonjs(),
  ]
};
