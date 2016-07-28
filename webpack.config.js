const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const TARGET = process.env.TARGET || 'dev';
if (TARGET === 'dev') module.exports = entries(common);
if (TARGET === 'prod') module.exports = entries(production);

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
    ],
    plugins: [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin()
    ]
  });
}

function production (tx) {
  return tx(common(function productionTx (config) {
    config.plugins.push(...[
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false, screw_ie8: true }
      })
    ]);

    return config;
  }));
}


function entries (mode) {
  return [
    mode(config => {
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
    }),

    mode(config => {
    // index coannot be complied with the rest of the components due to internal dependencies
      config.name = 'ui:index';

      config.entry = {
        index: './src/ui/index.js'
      };

    // All local files are externals - keeps index from depending on other components
      config.externals.push(function makeComponentsExternal (context, request, callback) {
        if (request.startsWith('./')) {
          callback(null, `commonjs ${request}`);
        } else {
          callback();
        }
      });

      config.output = {
        filename: '[name].js',
        path: path.resolve('./ui'),
        sourceMapFilename: '[name].map',
        libraryTarget: 'commonjs2',
      };

      return config;
    }),

    mode(config => {
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
    })
  ];
}
