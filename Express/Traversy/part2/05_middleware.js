const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');
const app = express();

// init middleware
app.use(logger);

// Get all members
app.get('/api/members', (req, res) => {
  // open 'http://localhost:5000/api/members'
  res.json(members);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Yeay, run on port ${PORT}`));