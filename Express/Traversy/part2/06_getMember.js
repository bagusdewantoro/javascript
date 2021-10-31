const express = require('express');
const path = require('path');
const members = require('./Members');
const app = express();

// Get all members
app.get('/api/members', (req, res) => {
  // open 'http://localhost:5000/api/members'
  res.json(members);
});

// Get single member
app.get('/api/members/:id', (req, res) => {
  // open 'http://localhost:5000/api/members/<id>'
  // res.send(req.params.id); // try this
  res.json(members.filter(member => member.id === parseInt(req.params.id)));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Yeay, run on port ${PORT}`));
