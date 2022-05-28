const app = require('express')();
const json = require('express').json();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const userRoute = require('./routes/user');

app.use(cors());
app.use(json);
app.use('/api/user', userRoute);

mongoose.connect(process.env.cloudDB)
  .then(() => app.listen(process.env.PORT, () => {
    console.log(`Database and Server is running at ${process.env.PORT}`)
  }))
  .catch(err => console.log(err))
