import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/yoyo/babel.js',
  dest: 'yoyo/babel.js',
  format: 'cjs',
  plugins: [
    json(),
    nodeResolve({ main: true }),
    commonjs()
  ]
};
