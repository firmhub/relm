const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

if (process.env.NODE_ENV === 'production') {
  module.exports = [
    // production(uiComponentsEntry),
    // production(uiIndexEntry),
    // production(packagesEntry),
    production(examplesEntry),
  ];
} else {
  module.exports = development(examplesEntry);

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
    externals: [
      /^babel.+$/,
    ]
  });
}

function development (tx) {
  return tx(common(function devTx (config) {
    config.devtool = '#eval';

    return config;
  }));
}

function production (tx) {
  return tx(common(function productionTx (config) {
    config.plugins = [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false, screw_ie8: true }
      })
    ];

    return config;
  }));
}

function uiComponentsEntry (config) {
  config.name = 'ui:components';

  config.entry = _.reduce(fs.readdirSync('./src/ui'), (object, filename) => {
  // Skip index - it is compiled seprately below
    if (filename === 'index.js') return object;

  // Normal components
    const name = filename.replace('.js', '');
    object[name] = `./src/ui/${filename}`;
    return object;
  }, {});

  config.output = {
    filename: '[name].js',
    path: path.resolve('./ui'),
    sourceMapFilename: '[name].map',
    libraryTarget: 'commonjs2',
  };

  return config;
}

function uiIndexEntry (config) {
  // index coannot be complied with the rest of the components due to internal dependencies
  config.name = 'ui:index';

  config.entry = {
    index: './src/ui/index.js'
  };

  // Everythink is external for the index; just do a simple transpilation
  config.externals.push((ctx, req, cb) => cb(null, `commonjs ${req}`));

  config.output = {
    filename: '[name].js',
    path: path.resolve('./ui'),
    sourceMapFilename: '[name].map',
    libraryTarget: 'commonjs2',
  };

  return config;
}

function packagesEntry (config) {
  config.name = 'packages';

  config.entry = {
    inferno: './src/packages/inferno.js',
    morphdom: './src/packages/morphdom.js',
    react: './src/packages/react.js',
  };

  config.output = {
    filename: '[name].js',
    path: __dirname,
    library: '[name]',
    libraryTarget: 'umd',
  };

  return config;
}

function examplesEntry (config) {
  config.name = 'example';

  config.entry = {
    // todo: './examples/todo/app.js',
    githunt: './examples/githunt/app.js',
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
