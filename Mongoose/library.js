const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Author = require('./libraryMDN/author');

app.get('/', (req, res) => {
  res.send('We are at home');
});

mongoose.connect(
  'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/belajar?retryWrites=true&w=majority',
  () => app.listen(3000, () => console.log(`Running on 3000, mongoDB to 'belajar'`))
);
