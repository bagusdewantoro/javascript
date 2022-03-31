const mongoose = require('mongoose');

// "mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/notedly?retryWrites=true&w=majority"

module.exports = {
  connect: DB_HOST => {
    // mongoose.set('useNewUrlParser', true);
    // mongoose.set('useFindAndModify', false);
    // mongoose.set('useCreateIndex', true);
    // mongoose.set('useUnifiedTopology', true);
    mongoose.connect(DB_HOST);
    mongoose.connection.on('error', err => {
      console.log(err);
      console.log('Make sure mongoDB is running');
      process.exit();
    });
  },
  close: () => {
    mongoose.connection.close();
  }
};
