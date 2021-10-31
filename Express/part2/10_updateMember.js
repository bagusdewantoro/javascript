const express = require('express');
const path = require('path');
const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Members API Routes
app.use('/api/members', require('./routes/api/members_3_update'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Yeay, run on port ${PORT}`));
