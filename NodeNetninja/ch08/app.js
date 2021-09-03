const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');
// ejs file MUST BE inside 'views' folder, if not, use this:
app.set('views', 'myviews');

// listen for request
app.listen(3000);

// middleware & next()
app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

// 3rd party middleware (alternative from the above) & static
app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', (req, res) => {
  const blogs = [
    {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  ];
  res.render('index', { title: 'Home', blogs });
});


// middleware other example
app.use((req, res, next) => {
  console.log('in the next middeware');
  next();
});


app.get('/about', (req, res) => {
  res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new Blog'});
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404'});
});
