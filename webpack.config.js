const webpack = require('webpack');

module.exports = {
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /(node_modules)/ },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  externals: [
    /^babel+$/,
    'mithril',
    'yo-yo',
  ],
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
