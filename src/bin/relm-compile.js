#!/usr/bin/env node
import _ from 'lodash';
import { argv } from 'yargs';
import { resolve } from 'path';

// Command line options to determin which compiler to run
const opts = _.defaults({}, argv, {
  framework: 'react-dom',
  watch: false
});

// Read package.json
const workingDir = process.env.PWD;
const json = require(resolve(workingDir, 'package.json'));

// Build the compiler configuration from package.json
const config = _.defaults(json['relm-compile'] || {}, {
  // Resolve all paths from the package directory
  workingDir,

  // If source is not provided, go with main from package.json
  entry: json.main || 'index.js',

  // Default build dir
  outputDir: './build'
});

const compiler = require(`../${opts.framework}/compiler`);

if (opts.watch) {
  compiler.watch(config);
} else {
  compiler.build(config)
    .then(() => console.log(`Build results saved to ${config.output}`))
    .then(null, (err) => console.error(err));
}
