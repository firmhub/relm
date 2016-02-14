import _ from 'lodash';
import Webpack from 'webpack';
import { resolve } from 'path';

import {
  getEntry,
  getPath,
  getPlugins,
  getLoaders,
  createBuilder,
  createWatcher,
} from '../internals/compiler-helpers';

function compiler (opts, mode = 'development') {
  const ext = mode === 'production' ? 'min.js' : 'js';
  const nodeModules = resolve(__dirname, '../node_modules');
  const React = resolve(nodeModules, `react/dist/react.${ext}`);

  const pragma = opts.jsx || 'dom';

  _.merge(opts, {
    globals: {
      [pragma]: resolve(__dirname, './pragma.js')
    },

    jsx: pragma,

    // Compile js/jsx
    loaders: (opts.loaders || []).concat({
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: [ 'es2015' ],
        plugins: [
          'lodash',
          'syntax-jsx',
          ['transform-react-jsx', { pragma }],
        ]
      }
    })
  });

  return new Webpack({
    entry: getEntry(opts.entry, mode),
    output: {
      filename: '[name].js',
      path: getPath(opts.workingDirectory)(opts.outputDir)
    },
    devtool: mode !== 'production' ? 'source-map' : null,
    plugins: getPlugins(opts.plugins, mode, opts),
    module: {
      loaders: getLoaders(opts.loaders, opts),
      noParse: [
        React,
      ]
    },
    resolve: {
      extensions: [ '', '.js', '.jsx' ],
      alias: {
        'react': React,
      }
    },
    externals: {
    }
  });
}

export const build = createBuilder(compiler);
export const watch = createWatcher(compiler);
