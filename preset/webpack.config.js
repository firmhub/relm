module.exports = {
  entry: `${__dirname}/preset.js`,
  output: {
    filename: 'preset.bundle.js',
    path: __dirname,
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json'
    }]
  }
};
