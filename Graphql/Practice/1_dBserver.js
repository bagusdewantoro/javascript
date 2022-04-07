// basic mongoDB server

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// const test = () => console.log('aa');
// module.exports = test();

const app = express();

// models
const bookSchema = new mongoose.Schema({
  title: {type: String, required: true},
  author: {type: String, required: true},
  genre: {type: String, required: true}
});
const book = mongoose.model('book', bookSchema);

// PORT, DB Host
const PORT = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST;

// connect to DB and run server
mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => console.log(`connected to DB at port ${PORT}`))
  })
  .catch((err) => console.log(err.message));

// export as module
module.exports = app;
