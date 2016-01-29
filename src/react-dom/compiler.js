import webpack from 'webpack';
import extend from 'lodash/extend';

function configure (opts = {}, mode = 'development') {
  const ext = mode === 'production' ? 'min.js' : 'js';

  const cfg = extend(opts, {
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
    externalPaths: {
      React: `react/dist/react.${ext}`,
      ReactDOM: `react-dom/dist/react-dom.${ext}`,
    },
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
    entry: cfg.src,
    output: {
      filename: '[name].js',
      path: cfg.dest
    },
    devtool: cfg.devtool,
    plugins: cfg.plugins,
    externals: {
      [cfg.externalPaths.React]: 'React'
    },
    module: {
      loaders: cfg.loaders
    },
    resolve: {
      extensions: [ '', '.jsx', '.js' ],
      alias: {
        'react-dom': cfg.externalPaths.ReactDOM
      },
    },
  });
}

export function compile (opts = {}) {
  return new Promise(function exec (resolve, reject) {
    compiler(configure(opts, 'production')).run((err, stats) => {
      if (err) {
        reject(err);
      } else if (stats.hasErrors()) {
        reject(stats.toString({ colors: true }));
      } else {
        resolve(stats);
      }
    });
  });
}

export function watch (opts = {}) {
  compiler(configure(opts)).watch({}, (err, stats) => {
    if (err) return console.log(err);
    if (stats.hasErrors()) return console.log(stats.toString({ colors: true }));

    // Success
    const json = stats.toJson({ source: false });
    console.log(`Compiled`, opts.dest, `(took ${json.time}ms)`);
    if (stats.hasWarnings()) {
      console.log(JSON.stringify(json.warnings, null, 2));
    }
  });
}
