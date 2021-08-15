// @flow

// how to run:
// node main.mjs

import fs from 'fs';

fs.readdir('../dist', (error, result) => {
  if (error) {
    throw error;
  }
  console.log(result);
});

console.log('Hihihi');
