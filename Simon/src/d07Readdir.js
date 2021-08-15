// @flow

// run this: (type di extension)
// node d07Readdir.mjs

import fs from 'fs';
import {join} from 'path';

// to tell you which directory my current dir is
// let path = join(__dirname, '../dist');
let path = '../dist';

console.log('First command, then readdir');

fs.readdir(path, (error, fileList) => {

  for (let fileName of fileList) {
    fs.stat(join(path, fileName));
    console.log(fileName, fileSize)
  }
});

console.log('Last command');
