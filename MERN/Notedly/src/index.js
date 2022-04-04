const express = require('express');
const { ApolloServer } = require('apollo-server-express');
require('dotenv').config();
const mongoose = require('mongoose');
const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const DB_HOST = process.env.DB_HOST;
const port = process.env.PORT || 4000;

const app = express();

// // dummy data
// let notes = [
//   { id: '1', content: 'This is a note', author: 'Adam Scott' },
//   { id: '2', content: 'This is another note', author: 'Harlow Everly' },
//   { id: '3', content: 'Oh hey look, another note!', author: 'Riley Harrison' }
// ];



// connect to the database
const db = require('./db');
db.connect(DB_HOST);
mongoose.connect(DB_HOST, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
    startServer();
    console.log('connected to mongoDB')
  })
  .catch(console.error);


// apollo server setup FIRST OPTION
async function startServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
      // add db models to the context
      return { models };
    }
  });
  await server.start();
  // apply apollo GraphQL middleware and set the path to /api
  server.applyMiddleware({ app, path: '/api' });
  app.listen(port, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));
}
// startServer();


// // apollo server setup SECOND OPTIONS (from docs))
// async function startApolloServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolver,
//   });
//   await server.start();
//   // const app = express();
//   // Additional middleware can be mounted at this point to run before Apollo.
//   // app.use('*', jwtCheck, requireAuth, checkScope);
//   // Mount Apollo middleware and set the path as you like.
//   server.applyMiddleware({ app, path: '/api' });
//   await new Promise(resolve => app.listen({ port: 4000 }, resolve));
//   console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
//   return { server, app };
// }
// startApolloServer();
