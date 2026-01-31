const { ApolloServer } = require('@apollo/server')

const typeDefs = `#graphql
  
  type User {
    id: ID!
    name: String!
    age: Int!
    username: String!
    nationality: Nationality!
    friends:[User]
    favoriteMovies:[Movie]
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

  type Mutation {
    createUser(input:createUserInput!): User
    updateUsername(input:updateUsernameInput!):User
    deleteUser(id:ID!):User
  }

  input updateUsernameInput {
   id: ID!
   newUsername:String!
  }


  input createUserInput {
    name: String!
    age: Int!
    username: String!
    nationality: Nationality = INDIAN # keeping the default value as Indian if there is no nationality key in req.body
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