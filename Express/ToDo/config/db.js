// Export mongoose
const mongoose = require('mongoose');

// Assign MongoDB connection string to Uri and declare options settings
var uri = 'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/todo?retryWrites=true&w=majority';

// Declare a variable named option and assign optional settings
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options)
  .then(() => console.log('Hurray, database connection established'),
    err => console.log('Huff, error', err)
  );
