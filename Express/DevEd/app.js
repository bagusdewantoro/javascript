const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

// Import routes
const postsRoute = require('./routes/4_deleteUpdate');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
  res.send('We are at home');
});

// Connect to DB
mongoose.connect(
  // 'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/deved?retryWrites=true&w=majority',
  process.env.DB_CONNECTION,
  () => console.log('connected to DB')
);


app.listen(3000, () => console.log('server running'));
