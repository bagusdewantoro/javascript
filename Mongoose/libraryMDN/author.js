const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  first_name: {type: String, required: true, maxLength: 100},
  family_name: {type: String, required: true, maxLength: 100},
  date_of_birth: Date,
  date_of_death: Date
});

module.exports = mongoose.model('Author', AuthorSchema);
