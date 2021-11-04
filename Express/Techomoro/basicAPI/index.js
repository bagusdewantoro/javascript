const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const playersRouter = require('./routes/players');
app.use('/', playersRouter);

app.listen(port, () => console.log('hore, sukses'));
