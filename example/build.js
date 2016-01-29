const compiler = require('relm/react-dom/compiler');

function buildExample (num) {
  return compiler.build({
    source: `./${num}/app.js`,
    output: `./build/${num}`,
    htmlTemplate: './index.html',
    workingDirectory: __dirname
  });
}

const tasks = [
  buildExample('1'),
  buildExample('2'),
  buildExample('3'),
];

Promise
  .all(tasks)
  .then(function success () {
    console.log('Finished building %s examples', tasks.length);
  })
  .then(null, function failure (err) {
    console.error(err);
  });
