const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// stream read & write
/*
readStream.on('data', (chunk) => {
  console.log('---- NEW CHUNK ----');
  console.log(chunk);
  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunk);
});
*/

// shortcut for the code above (without console.log)
readStream.pipe(writeStream);
