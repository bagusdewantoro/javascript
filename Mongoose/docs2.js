const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/docs?retryWrites=true&w=majority', () => console.log('connected to DB'));

// Defining a schema with automatic _id
const { Schema } = mongoose;
const schema1 = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  },
});
// console.log(schema1)

// Creating a model
const Blog = mongoose.model('Blog', schema1);
console.log(`${Blog()}`)

//
