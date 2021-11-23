const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
require('dotenv/config');

const app = express();

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to atlas')
);

app.listen(
  process.env.PORT,
  () => console.log('server running')
);
