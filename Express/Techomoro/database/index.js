const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const postsRouter = require('./routes/posts');
const config = require('./config');

const app = express();

// mongoose.set("useNewUrlParser", true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);

const port = 3000;

app.use(logger('dev'));

const dbUrl = config.dbUrl;

const options = {
  keepAlive: 1,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect(dbUrl, options, (err) => {
  if (err) console.log(err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/posts', postsRouter);

app.listen(port, () => console.log('sukses'));
