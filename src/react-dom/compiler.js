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
  const React = resolve(nodeModules, `react/dist/react-with-addons.${ext}`);
  const ReactDOM = resolve(nodeModules, `react-dom/dist/react-dom.${ext}`);

  _.merge(opts, {
    // Make react a global variable in all modules
    globals: {
      React: 'react'
    },

    // Compile js/jsx
    loaders: (opts.loaders || []).concat({
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: [ 'es2015', 'react' ],
        plugins: [ 'lodash' ]
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
        'react-dom': ReactDOM
      }
    },
    externals: {
      // Alias react plugins in case some dependencies need them
      'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup',
      'react-addons-transition-group': 'React.addons.TransitionGroup',
      'react-addons-update': 'React.addons.update',
    }
  });
}

export const build = createBuilder(compiler);
export const watch = createWatcher(compiler);
