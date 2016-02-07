import _ from 'lodash';
import Webpack from 'webpack';

import {
  getEntry,
  getPath,
  getPlugins,
  getLoaders,
  createBuilder,
  createWatcher,
} from '../internals/compiler';

function compiler (opts, mode = 'development') {
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
      filename: '[name]/bundle.js',
      path: getPath(opts.workingDirectory)(opts.outputDir)
    },
    devtool: mode !== 'production' ? 'source-map' : null,
    plugins: getPlugins(opts.plugins, mode, opts),
    module: {
      loaders: getLoaders(opts.loaders, opts),
    },
    resolve: {
      extensions: [ '', '.jsx', '.js' ],
      // alias: mode === 'production' ? {
      //   '@@relm/start': resolve(__dirname, './start')
      // } : {
      //   '@@relm/start': resolve(__dirname, './start-dev')
      // }
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
