const { gql } = require('apollo-server-express');

// create type definitions for graphql
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: [authors]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    me: User
    users: [User]
    user(username:String!): User
    savedBooks(username:String!): [Book]
    book(_id: ID!): Book
  }

  type Mutation {

  }

  type Auth {
    token: ID!
    user: User
  }
`

module.exports = typeDefs;