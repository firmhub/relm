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
    // Make mithril a global variable in all modules
    globals: {
      m: 'mithril'
    },

    // Compile js
    loaders: (opts.loaders || []).concat({
      test: /\.(js)$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: [ 'es2015' ],
        plugins: [ 'lodash' ]
      }
    })
  });

  return new Webpack({
    entry: getEntry(opts.source, mode),
    output: {
      filename: '[name]/bundle.js',
      path: getPath(opts.workingDirectory)(opts.output)
    },
    devtool: mode !== 'production' ? 'source-map' : null,
    plugins: getPlugins(opts.plugins, mode, opts),
    module: {
      loaders: getLoaders(opts.loaders, opts),
    },
    resolve: {
      extensions: [ '', '.js' ],
    }
  });
}

export const build = createBuilder(compiler);
export const watch = createWatcher(compiler);
