const { ApolloServer } = require('@apollo/server')

const typeDefs = `#graphql
  
  type User {
    id: ID!
    name: String!
    age: Int!
    username: String!
    nationality: Nationality!
    friends:[User]
  }
  type Movie {
    id:ID!
    name:String!
    yearOfPublication:Int!
    isInTheaters:Boolean!
  }
  
  type Query {
    users: [User!]!
    user(id:ID!):User!
    movies:[Movie!]!
    movie(name:String!):Movie!
  }

  enum Nationality {
    INDIAN
    GERMAN
    CHILE
    AMERICAN
    CANADIAN
  }
`

module.exports = { typeDefs }