const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const { rollup } = require('rollup');
const json = require('rollup-plugin-json');
const babel = require('rollup-plugin-babel');
const uglify = require('rollup-plugin-uglify');
const replace = require('rollup-plugin-replace');
const commonjs = require('rollup-plugin-commonjs');
const nodeResolve = require('rollup-plugin-node-resolve');

function readDir (dir, ext, f) {
  const files = fs.readdirSync(path.resolve(__dirname, dir));
  return _.reduce(files, function checkExtensionFirst (entries, filename) {
    if (!filename.endsWith(ext)) return entries;
    return entries.concat(f(filename));
  }, []);
}

function rollupPlugins () {
  return [
    nodeResolve({ preferBuiltins: true }),
    commonjs(),
    json(),
  ];
}

function babelPlugin (overrides) {
  const basic = {
    exclude: 'node_modules/**',
    babelrc: false,
    presets: [
      'es2015-rollup',
      path.join(__dirname, 'lib/preset.js'),
    ],
  };

  return babel(Object.assign(basic, overrides));
}

/**
 * Compiles code using babel but excludes lodash from bundle
 * and does not run babel-plugin-lodash. The lib folder can
 * then be published to npm
 * @param {String} srcFilename - The source file to be compiled
 * @param {String} [destFilename] - Destination where it should be saved
 * @returns {Promise}
 */
function compileForNPM (srcFilename) {
  const destFilename = arguments[1] || srcFilename;

  const input = {
    entry: path.join(__dirname, 'src', srcFilename),
    plugins: rollupPlugins().concat(babelPlugin()),
    external: ['lodash'],
  };

  const output = {
    format: 'cjs',
    exports: 'named',
    dest: path.join(__dirname, 'lib', destFilename)
  };

  return rollup(input)
    .then(bundle => bundle.write(output))
    .then(() => `src/${srcFilename} -> lib/${destFilename}`);
}

function compileForDistribution (srcFilename) {
  const destFilename = arguments[1] || srcFilename;

  const input = {
    entry: path.join(__dirname, 'src', srcFilename),
    plugins: rollupPlugins().concat([
      babelPlugin({ plugins: ['lodash'] }),
      replace({ 'process.env': JSON.stringify({ NODE_ENV: 'production' }) }),
      uglify()
    ])
  };

  const output = {
    format: 'umd',
    moduleName: 'relm',
    dest: path.join(__dirname, 'dist', destFilename),
    sourceMap: true
  };

  return rollup(input)
    .then(bundle => bundle.write(output))
    .then(() => `src/${srcFilename} -> dist/${destFilename}`);
}

function buildPreset () {
  const preset = {
    entry: path.join(__dirname, 'src/preset.js'),
    plugins: rollupPlugins(),
    // Trial and error with excluded packages until all
    // the ui components compile without errors - idea
    // is to exclude as few as possible
    external: [
      'postcss',
      'postcss-safe-parser',
      'esutils',
      'babel-runtime',
      'babel-types',
      // 'autoprefix',
      // 'postcss-csso',
      // 'babel-plugin-syntax-jsx',
      // 'babel-plugin-transform-react-jsx',
    ],
  };
  return rollup(preset).then(bundle => bundle.write({
    format: 'cjs',
    dest: path.join(__dirname, 'lib/preset.js')
  }));
}

function buildLibs () {
  const files = Array.prototype.concat.apply([], [
    compileForNPM('relm.js', 'core.js'),
    compileForNPM('packages/inferno.js'),
    readDir('src/plugins', '.js', it => compileForNPM(`plugins/${it}`, it)),
    readDir('src/ui', '.js', it => compileForNPM(`ui/${it}`)),
  ]);

  let count = 0;
  console.log(`Rolling ${files.length} files`);
  const logWithCount = promise => promise.then(msg => console.log(`[${++count}] ${msg}`));

  return Promise.all(files.map(logWithCount));
}

function buildPackages () {
  const packages = [
    compileForDistribution('packages/inferno.js', 'relm-inferno.min.js')
  ];

  return Promise.all(packages)
    .then(msg => console.log(`Rolled ${msg}`));
}

Promise.resolve()
  // .then(buildPreset)
  // .then(buildLibs)
  .then(buildPackages)
  .then(() => console.log(`Done!`))
  .catch((err) => console.error(err));
