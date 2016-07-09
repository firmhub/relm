const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel', exclude: /(node_modules)/ },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  output: {
    libraryTarget: 'umd'
  },
  externals: [
    /^babel+$/
  ],
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
