import express from 'express';
const app = express();

// compile method to bundle react app
import devBundle from './devBundle';
devBundle.compile(app);

// serving static files from dist folder
import path from 'path';
const CURRENT_WORKING_DIR = process.cwd();
app.use(
  'dist',
  express.static(path.join(CURRENT_WORKING_DIR, 'dist'))
);

// rendering templates at the root
import template from './../template';
app.get('/', (req, res) => {
  res.status(200).send(template())
});

// starts server to listen on specified port
let port = process.env.PORT || 3000;
app.listen( port, function onStart(err) {
  if (err) console.log(err);
  console.info('Server started on port %s.', port)
});

// MongoDB connection
import { MongoClient } from 'mongodb';
const url = process.env.MONGODB_URI || 'mongodb+srv://netninja:test1234@nodetuts.y6vzw.mongodb.net/simpleSetup?retryWrites=true&w=majority';
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  console.log('Successfully connected to mongodb server')
  db.close()
});


// // Database Connection URL
// const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernSimpleSetup'
// // Use connect method to connect to the server
// MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },(err, db)=>{
//   console.log("Connected successfully to mongodb server")
//   db.close()
// })
