const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
require('dotenv').config();
const mongoose = require('mongoose');
const models = require('./models');

const DB_HOST = process.env.DB_HOST;
const port = process.env.PORT || 4000;

const app = express();

// dummy data
let notes = [
  { id: '1', content: 'This is a note', author: 'Adam Scott' },
  { id: '2', content: 'This is another note', author: 'Harlow Everly' },
  { id: '3', content: 'Oh hey look, another note!', author: 'Riley Harrison' }
];

// construct a schema using GraphQL schema
const typeDefs = gql`
  type Query {
    hello: String
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Note {
    id: ID!
    content: String!
    author: String!
  }
  type Mutation {
    newNote(content: String): Note!
  }
`;

// provide resolver function for our schema fields
const resolvers = {
  Query: {
    hello: () => 'hello world!!',
    // notes: () => notes, // using dummy data
    notes: async () => await models.Note.find(), // fetch from database cloud
    // note: (parent, args) => {
    //   return notes.find(note => note.id === args.id); // using dummy data
    // }
    note: async (parent, args) => await models.Note.findById(args.id),
  },
  Mutation: {
    // 1. Using dummy data:
    // newNote: (parent, args) => {
    //   let noteValue = {
    //     id: String(notes.length + 1),
    //     content: args.content,
    //     author: 'Adam Scott'
    //   };
    //   notes.push(noteValue);
    //   return noteValue;
    // }
    // 2. Fetch from database cloud:
    newNote: async (parent, args) => {
      return await models.Note.create({
        content: args.content,
        author: 'Adam Scott'
      });
    }
  }
};


// connect to the database
// const db = require('./db');
// db.connect(DB_HOST);
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
    resolvers
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
