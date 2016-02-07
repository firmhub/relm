import _ from 'lodash';
import webpack from 'webpack';
import DevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { isAbsolute, resolve as resolvePath } from 'path';

const serverHost = 'localhost';
const serverPort = 8080;

export function getPath (basePath = process.cwd()) {
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

export function getHtml (entry, template, opts) {
  const htmlOptions = getHtmlOptions(template, opts);

  if (!_.isPlainObject(entry)) {
    return [new HtmlWebpackPlugin(htmlOptions)];
  }

  return _.reduce(entry, (files, __, name) => {
    const copy = _.clone(htmlOptions);
    copy.chunks = [name];
    copy.title = [copy.title, name].join(' | ');
    copy.filename = `${name}/index.html`;

    files.push(new HtmlWebpackPlugin(copy));
    return files;
  }, []);
}

export function getAssets (assets = [], opts) {
  const resolveFromCwd = getPath(opts.workingDirectory);
  return _.map(assets, (asset) => _.extend(asset, {
    to: resolveFromCwd(asset.to),
    from: resolveFromCwd(asset.from),
  }));
}

export function getPlugins (plugins = [], mode, opts) {
  // Add some common plugins
  plugins.push(
    new webpack.ProvidePlugin(opts.globals || {}),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(mode) }),
    new CopyWebpackPlugin(getAssets(opts.assets, opts))
  );

  // Create html files (multiple for multiple chunks)
  plugins.push(...getHtml(opts.entry, opts.template, opts));

  if (mode !== 'production') return plugins;

  plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ minimize: true })
  );

  return plugins;
}

export function getLoaders (loaders = []/*, opts*/) {
  loaders.push(
    // Add common loaders here (css, etc.)
  );

  return loaders;
}

export function getEntry (entry = {}, mode) {
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

export function createBuilder (compiler) {
  return function build (opts = {}) {
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
  };
}

export function createWatcher (compiler) {
  return function watch (opts = {}) {
    const base = getPath(opts.workingDirectory)(opts.outputDir);

    const server = new DevServer(compiler(opts), {
      contentBase: base,
      stats: { colors: true }
    });

    server.listen(serverPort, serverHost, (err) => {
      if (err) return console.log(err);
      console.log(`Development server started on http://${serverHost}:${serverPort}/`);
    });
  };
}
