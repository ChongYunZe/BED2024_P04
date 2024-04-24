const path = require('node:path');

const notes = './notes.txt';

path.dirname(notes);
path.basename(notes);
path.extname(notes);


const fs = require('node:fs');

fs.readFile('./test.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


const fs2 = require('node:fs');

const content = 'Some content!';

fs2.writeFile('./test.txt', content, err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});


const chalk = require('chalk');

console.log(chalk.yellow('hi!'));