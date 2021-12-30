import config from './../config/config';
import app from './express';

// database
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('database connected!'))
  .catch((error) => console.log(error));
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to ${config.mongoUri}`)
});

// implement server that can listen for incoming request
app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Served on port %s.', config.port)
});
