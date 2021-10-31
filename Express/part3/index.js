const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) => res.render('index', {
  title: 'Member App',
  members // shorthand from members: members
}));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Yeay, run on port ${PORT}`));
