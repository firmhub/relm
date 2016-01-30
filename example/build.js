const compiler = require('relm/react-dom/compiler');

compiler.watch({
  source: `./1/index.js`,
  output: './build/1',
  workingDirectory: __dirname
});

// function buildExample (num) {
//   return compiler.build({
//     source: `./${num}/index.js`,
//     output: `./build/${num}`,
//     workingDirectory: __dirname
//   });
// }
//
// const tasks = [
//   buildExample('1'),
// ];
//
// Promise
//   .all(tasks)
//   .then(function success () {
//     console.log('Finished building %s examples', tasks.length);
//   })
//   .then(null, function failure (err) {
//     console.error(err);
//   });
