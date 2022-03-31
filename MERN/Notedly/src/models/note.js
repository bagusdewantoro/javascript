const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  // assign createdAt and updatedAt with a Date Type
  {
    timestapms: true
  }
);

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
