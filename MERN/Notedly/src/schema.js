const { gql } = require('apollo-server-express');

// construct a schema using GraphQL schema
module.exports = gql`
  type Note {
    id: ID!
    content: String!
    author: String!
  }
  type Query {
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Mutation {
    newNote(content: String): Note!
  }
`;
