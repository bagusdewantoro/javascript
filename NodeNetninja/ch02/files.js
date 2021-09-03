const fs = require('fs');

// reading files
fs.readFile('./docs/blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  console.log(data.toString());
});
console.log('last line');


// writing files
fs.writeFile('./docs/blog1.txt', 'New Content', () => {
  console.log('success');
});
fs.writeFile('./docs/blog2.txt', 'New Content', () => {});


// directories
// check if the directories exist, delete.
// check if the directories not exist, create.
if (!fs.existsSync('./assets')) {
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// deleting files (if there is ./docs/deleteme.txt file)
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  })
}
