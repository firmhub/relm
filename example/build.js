const compiler = require('relm/react-dom/compiler');

const cfg = {
  source: {
    '1': './1/index.js',
    '2': './2/index.js',
  },
  output: './build',
  workingDirectory: __dirname
};

compiler.watch(cfg);

// compiler
//   .build(cfg)
//   .then(() => console.log('done'))
//   .then(null, err => console.error(err));
