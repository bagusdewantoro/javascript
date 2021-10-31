const express = require('express');
const path = require('path');
const members = require('./Members');
const moment = require('moment');
const app = express();

const logger = (req, res, next) => {
  console.log(`bagus got request from ${
    req.protocol}://${req.get('host')}${
    req.originalUrl} at: ${
    moment().format()}`
  );
  next();
};

// init middleware
app.use(logger);

// Get all members
app.get('/api/members', (req, res) => {
  // open 'http://localhost:5000/api/members'
  res.json(members);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Yeay, run on port ${PORT}`));
