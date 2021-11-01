'use strict';

const mongoose = require('mongoose');

// Declaring shcema and assign Schema class
const Schema = mongoose.Schema;

// Create Schema Instance and add schema properties
const TodoSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('todoModel', TodoSchema);
