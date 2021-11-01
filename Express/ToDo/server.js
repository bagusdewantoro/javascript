'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add endpoint
app.get('/', (req, res) => res.send('Hello all'));

// Listen to server
app.listen(port, () => console.log(`Amazing, server running at http://localhost:${port}`));
