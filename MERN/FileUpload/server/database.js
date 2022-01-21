'use strict';
const mongoose = require('mongoose');
require('dotenv').config();

const mongoDB = process.env.mongoDB;

module.exports = () => {
    mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......'));
}
