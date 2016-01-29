import webpack from 'webpack';
import { extend } from 'lodash';
import { resolve } from 'path';
import util from 'gulp-util';

function configure (opts = {}, mode = 'development') {
  const cwd = opts.workingDirectory || process.cwd();
  const cfg = extend(opts, {
    source: resolve(cwd, opts.source),
    output: resolve(cwd, opts.output),
    loaders: [
      {
        // jsx
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'react' ],
          plugins: [ 'lodash' ]
        }
      }
    ],
    externals: opts.externals || {},
    plugins: (opts.plugins || []).concat([
      new webpack.ProvidePlugin(opts.globals || {}),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(mode)
      })
    ])
  });

  if (mode === 'production') {
    cfg.plugins.push(
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({ minimize: true })
    );
  } else {
    cfg.devtool = 'source-map';
  }

  return cfg;
}

function compiler (cfg) {
  return webpack({
    entry: cfg.source,
    output: {
      filename: '[name].js',
      path: cfg.output
    },
    devtool: cfg.devtool,
    plugins: cfg.plugins,
    externals: cfg.externals,
    module: {
      loaders: cfg.loaders
    },
    resolve: {
      alias: cfg.alias || {},
      extensions: [ '', '.jsx', '.js' ]
    },
  });
}

function onDone (cb) {
  return function webpackFinished (err, stats) {
    if (err) return cb(err);
    if (stats.hasErrors()) return cb(stats.toString({ colors: true }));
    cb(null, stats);
  };
}

export function compile (opts = {}) {
  return function run (cb) {
    compiler(configure(opts, 'production')).run(onDone(cb));
  };
}

export function watch (opts = {}) {
  return function start () {
    compiler(configure(opts)).watch({}, (err, stats) => {
      if (err) return console.log(err);
      if (stats.hasErrors()) return console.log(stats.toString({ colors: true }));

      // Success
      const json = stats.toJson({ source: false });
      util.log(`Compiled`, util.colors.green(opts.dest), `(took ${json.time}ms)`);
      if (stats.hasWarnings()) {
        console.log(JSON.stringify(json.warnings, null, 2));
      }
    });
  };
}
