import _ from 'lodash';
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { isAbsolute, resolve as resolvePath } from 'path';

const serverHost = 'localhost';
const serverPort = 8080;

function getPath (basePath = process.cwd()) {
  return (path) => isAbsolute(path) ? path : resolvePath(basePath, path);
}

function getHtmlOptions (template, opts) {
  const htmlOptions = {
    title: opts.title || 'Relm App',
    filename: 'index.html',
    inject: 'body',
  };

  if (!template) return htmlOptions;

  if (_.includes(template, '<')) {
    // If html template is provided
    htmlOptions.templateContent = template;
  } else {
    // If path to html template is provided
    htmlOptions.template = getPath(opts.workingDirectory)(template);
  }

  return htmlOptions;
}

function getHtml (template, opts) {
  const htmlOptions = getHtmlOptions(template, opts);

  if (!_.isPlainObject(opts.source)) {
    return [new HtmlWebpackPlugin(htmlOptions)];
  }

  return _.reduce(opts.source, (files, entry, chunkName) => {
    const copy = _.clone(htmlOptions);
    copy.chunks = [chunkName];
    copy.filename = `${chunkName}/index.html`;

    files.push(new HtmlWebpackPlugin(copy));
    return files;
  }, []);
}

function getAssets (assets = [], opts) {
  const resolveFromCwd = getPath(opts.workingDirectory);
  return _.map(assets, (asset) => _.extend(asset, {
    to: resolveFromCwd(asset.to),
    from: resolveFromCwd(asset.from),
  }));
}

function getPlugins (plugins = [], mode, opts) {
  // Add some common plugins
  plugins.push(
    new webpack.ProvidePlugin(opts.globals || {}),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(mode) }),
    new CopyWebpackPlugin(getAssets(opts.assets, opts))
  );

  // Create html files (multiple for multiple chunks)
  plugins.push(...getHtml(opts.template, opts));

  if (mode !== 'production') return plugins;

  plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  );

  return plugins;
}

function getLoaders (loaders = []/*, opts*/) {
  loaders.push(
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
  );

  return loaders;
}

function getEntry (entry = {}, mode) {
  if (mode === 'production') return entry;

  const devServer = `webpack-dev-server/client?http://${serverHost}:${serverPort}`;

  function mapEntry (x) {
    if (_.isString(x)) return [devServer, x];
    if (_.isArray(x)) return [devServer, ...x];
    return x;
  }

  if (_.isPlainObject(entry)) {
    return _.mapValues(entry, mapEntry);
  }

  return mapEntry(entry);
}

function compiler (opts, mode = 'development') {
  // const ext = mode === 'production' ? 'min.js' : 'js';

  _.merge(opts, {
    // Make react a global variable in all modules
    globals: {
      React: 'react'
    }
  });

  return webpack({
    entry: getEntry(opts.source, mode),
    output: {
      filename: '[name]/bundle.js',
      path: getPath(opts.workingDirectory)(opts.output)
    },
    devtool: mode !== 'production' ? 'source-map' : null,
    plugins: getPlugins(opts.plugins, mode, opts),
    module: {
      loaders: getLoaders(opts.loaders, opts),
      noParse: [
        // /react\/dist\//,
        // /react-dom\/dist\//
      ],
    },
    resolve: {
      extensions: [ '', '.jsx', '.js' ],
      alias: {
        // 'react': `react/dist/react-with-addons.${ext}`,
        // 'react-dom': `react-dom/dist/react-dom.${ext}`
      }
    },
    externals: {
      // Alias react plugins in case some dependencies need them
      'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup',
      'react-addons-transition-group': 'React.addons.TransitionGroup',
      'react-addons-update': 'React.addons.update',
    }
  });
}

export function build (opts = {}) {
  return new Promise(function exec (resolve, reject) {
    compiler(opts, 'production').run((err, stats) => {
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
  const base = getPath(opts.workingDirectory)(opts.output);
  const server = new DevServer(compiler(opts), {
    contentBase: base,
    stats: { colors: true }
  });

  server.listen(serverPort, serverHost, (err) => {
    if (err) return console.log(err);
    console.log(`DevServer started on http://${serverHost}:${serverPort}/`);
  });
}
