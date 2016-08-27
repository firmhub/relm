const _ = require('lodash');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const unminifiedPlugin = require('unminified-webpack-plugin');
const preset = require('./preset/webpack.config');

if (process.env.NODE_ENV === 'production') {
  Promise.resolve()
    .then(packAndLog(preset))
    .then(packAndLog(production(distEntries)))
    .then(renameUIExports)
    .then(packAndLog(production(packageEntry)))
    .then(packAndLog(development(testsEntry)))
    .catch(function failure (err) {
      console.error(err);
    });
} else {
  module.exports = [
    development(distEntries),
    development(packageEntry),
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
    config.plugins = [];
    return config;
  }));
}

function production (tx) {
  return tx(common(function productionTx (config) {
    config.devtool = 'source-map';

    config.plugins = [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
      new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false, screw_ie8: true },
        sourceMap: true,
      }),
      new unminifiedPlugin()
    ];

    return config;
  }));
}

function packageEntry (cfg) {
  cfg.name = 'packages';

  cfg.entry = {
    'inferno-starter': './src/packages/inferno-starter.js',
  };

  cfg.output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
    sourceMapFilename: '[name].min.map',
    library: 'relm',
    libraryTarget: 'umd'
  };

  return cfg;
}

function testsEntry (cfg) {
  cfg.name = 'tests';

  cfg.entry = {
    'inferno-starter.e2e': './src/packages/__tests__/inferno-starter.e2e.js',
  };

  cfg.output = {
    path: path.join(__dirname, 'dist/__tests__'),
    filename: '[name].js',
  };

  cfg.externals = [
    '../inferno-starter'
  ];

  return cfg;
}

function distEntries (cfg) {
  cfg.name = 'dist';

  cfg.entry = Object.assign.apply(Object, [
    {
      create: './src/create.js',
      list: './src/list.js',
      router: './src/router.js',
    },
    // readDir('./src/plugins', '.js', function readPlugins (entries, filename) {
    //   entries[filename] = `./src/plugins/${filename}.js`;
    //   return entries;
    // }),
    readDir('./src/ui', '.js', function readUI (entries, filename) {
      entries[`ui/${filename}`] = `./src/ui/${filename}.js`;
      return entries;
    }),
  ]);

  cfg.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      name: 'create',
      minChunks (module, count) {
        if (!module.resource) return false;
        if (module.resource.indexOf('lodash') > -1 && count > 1) return true;
        return false;
      }
    })
  );

  cfg.output = {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
    sourceMapFilename: '[name].min.map',
    library: ['relm', '[name]'],
    libraryTarget: 'umd'
  };

  // lib.externals = [
  //   /lodash/,
  // ];

  return cfg;
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

function pack (config) {
  return new Promise(function exec (resolve, reject) {
    const compiler = webpack(config);
    compiler.run(function callback (err, stats) {
      if (err) return reject(err);
      const jsonStats = stats.toJson();
      if (jsonStats.errors.length > 0) return reject(jsonStats.errors);
      return resolve(stats);
    });
  });
}

function log (stats) {
  console.log(stats.toString('minimal'));
  return stats;
}

function packAndLog (config) {
  return () => pack(config).then(log);
}

function stringReplace (filename, source, replacement) {
  return new Promise(function exec (resolve, reject) {
    fs.readFile(filename, 'utf8', function fileRead (readError, data) {
      if (readError) return reject(readError);

      const result = data.replace(source, replacement);

      return fs.writeFile(filename, result, 'utf8', function fileWritten (writeError) {
        if (writeError) return reject(writeError);
        return resolve();
      });
    });
  });
}

// This is a workaround for webpack's umd export
//
// We want weback to compile ui files to dist/ui sub directory but want the exports
// named relm.Button instead of relm[ui/Button]. This cannot be acheived through
// separate webpack configs as we still want to apply CommonsChunkPlugin across
// the board (ex: so lodash modules used inside ui components can be extracted to core)
//
// The naming only affects the global export; commonjs usage is normal i.e. require('relm/ui/Button')
//
// So for now, this method reads all files in dist/ui and replaces the export names
function renameUIExports () {
  return Promise.resolve().then(function exec () {
    const dir = path.join(__dirname, 'dist/ui');
    const files = fs.readdirSync(dir).map(file => path.join(dir, file));

    const jsRegex = /\["ui\//g;             // replace occurrences of the ui prefix ["ui/
    const sourceMapRegex = /\[\\"ui\//g;    // sourcemap has quotation escaped [\"ui

    function replacementPromise (promises, filename) {
      if (filename.endsWith('.js')) return promises.concat(stringReplace(filename, jsRegex, '["'));
      if (filename.endsWith('.map')) return promises.concat(stringReplace(filename, sourceMapRegex, '[\\"'));
      return promises;
    }

    return Promise.all(_.reduce(files, replacementPromise, [])).then(function done (replacements) {
      console.log(`Renamed ${replacements.length} exports in dist/ui from relm[ui/Component] to relm[Component]`);
    });
  });
}
