const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

if (process.env.NODE_ENV === 'production') {
  module.exports = [
    development(presetEntry),
    production(distEntry),
    production(minEntry),
    production(libEntry),
  ];
} else {
  module.exports = [
    development(distEntry),
    // development(libEntry),
    // development(examplesEntry),
  ];

  module.exports.devServer = {
    contentBase: 'examples/',
    inline: true,
  };
}

function common (tx) {
  return tx({
    resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    module: {
      loaders: [{
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: [
          /(node_modules)/,                         // Skip node modules
          path.resolve(__dirname, 'inferno.js'),    // Don't process compiled versions
          path.resolve(__dirname, 'main.js'),       // (for instance when required from the examples)
        ]
      }, {
        test: /\.json$/,
        loader: 'json'
      }]
    },
    debug: true,
    externals: [
      /^babel.+$/,
    ]
  });
}

function development (tx) {
  return tx(common(function devTx (config) {
    config.devtool = 'eval-source-map';
    return config;
  }));
}

function production (tx) {
  return tx(common(function productionTx (config) {
    config.plugins = [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } })
    ];

    return config;
  }));
}

function distEntry (unminPackage) {
  unminPackage.name = 'dist';

  unminPackage.entry = {
    inferno: './src/packages/inferno.js',
  };

  unminPackage.output = {
    filename: 'relm-[name].js',
    path: path.resolve('./dist'),
    library: 'relm',
    libraryTarget: 'umd',
  };

  return unminPackage;
}

function minEntry (minPackage) {
  distEntry(minPackage);

  minPackage.name = 'min';
  minPackage.devtool = 'source-map';

  minPackage.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false, screw_ie8: true },
      sourceMap: true,
    })
  );

  minPackage.output.filename = 'relm-[name].min.js';
  minPackage.output.sourceMapFilename = 'relm-[name].min.map';

  return minPackage;
}

function libEntry (lib) {
  lib.name = 'lib';
  // config.devtool = 'source-map';

  lib.entry = Object.assign.apply(Object, [
    {
      core: './src/relm.js',
    },
    readDir('./src/plugins', '.js', function readPlugins (entries, filename) {
      entries[filename] = `./src/plugins/${filename}.js`;
      return entries;
    }),
    readDir('./src/ui', '.js', function readPlugins (entries, filename) {
      entries[`ui/${filename}`] = `./src/ui/${filename}.js`;
      return entries;
    }),
  ]);

  lib.externals = [
    /lodash/,
  ];

  lib.output = {
    filename: '[name].js',
    path: path.resolve('./lib'),
    // sourceMapFilename: '[name].map',
    library: '[name]',
    libraryTarget: 'umd',
  };

  return lib;
}

function presetEntry (config) {
  delete config.devtool;
  config.target = 'node';
  config.entry = {
    preset: './src/preset.js',
  };
  config.externals = [
    // Every non-relative module is external
    // abc -> require("abc")
    // /^[a-z\-0-9]+$/,
  ];
  config.output = {
    filename: '[name].js',
    path: path.resolve('./lib'),
    libraryTarget: 'commonjs2',
  };
  return config;
}

function examplesEntry (config) {
  config.name = 'example';

  config.entry = {
    // todo: './examples/todo/app.js',
    starwars: './examples/starwars/app.js',
    http: './examples/http/app.js',
    quiz: './examples/quiz/app.js',
  };

  config.output = {
    filename: './[name]/app.dist.js',
    path: path.resolve(__dirname, './examples'),
    library: '[name]',
    libraryTarget: 'umd'
  };

  return config;
}

/*
 * Helpers
 */

function readDir (dir, ext, f) {
  return _.reduce(fs.readdirSync(dir), function checkExtensionFirst (entries, filename) {
    if (filename.indexOf(ext) === -1) return entries;
    return f(entries, filename.replace(ext, ''));
  }, {});
}
