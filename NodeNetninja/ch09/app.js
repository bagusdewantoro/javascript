const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// store mongodb URI
const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/node-tuts?retryWrites=true&w=majority';

// connect to the database
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');
// ejs file MUST BE inside 'views' folder, if not, use this:
app.set('views', 'myviews');

// 3rd party middleware (alternative from the above) & static
app.use(express.static('public'));
app.use(morgan('dev'));


// mongoose and mongo sandbox routes
// add blog (find)
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'Title added by request',
    snippet: 'Snippet added by request',
    body: 'Body added by request'
  });
  blog.save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err);
    });
});

// retrieve all blogs (find)
app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
})

// retrieve single blog (findById)
app.get('/single-blog', (req, res) => {
  Blog.findById('6132558844ba3212de2a8ca1')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
})

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
