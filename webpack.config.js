const webpack = require('webpack');
const path = require('path');

module.exports = {
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
  output: {
    libraryTarget: 'umd'
  },
  externals: [
    /^babel.+$/,
    // /^lodash.+$/,
  ],
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
