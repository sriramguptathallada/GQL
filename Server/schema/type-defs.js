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

/*
How to write a GraphQL mutation query

mutation CreateUser {        // Operation name (can be anything)
  createUser(                //  endpoint name
    input: {                 // Argument name defined in schema (NOT req.body directly)
      name: "Sri"
      age: 25
      username: "sriram_dev"
    }
  ) {
    id                       // Fields we want in the response
    name
    age
    username
    nationality
  }
}

Explanation:
- "CreateUser" → just a label for the mutation (optional but useful for debugging)
- "createUser" → endpoint
- "input" → argument name defined in schema (acts like request payload)
- Inside input {} → data sent to backend (similar to req.body in REST)
- Last {} block → selecting what fields to return (GraphQL gives only what we ask)
*/


/*
How to write a GraphQL query

query Users {          // Operation name (optional, useful for debugging)
  users {              //  endpoint name
    id                 // Fields we want in response
    name
    username
  }
}

Explanation:
- "Users" → operation name (can be anything)
- "users" → endpoint
- Last {} block → selecting only required fields
  GraphQL returns ONLY these fields (no extra data)
*/



/*
GraphQL Delete Mutation

mutation DeleteUser {        // Operation name (can be anything)
  deleteUser(id: "1") {      //  endpoint name with argument
    name                     // Fields to return after deletion
  }
}

Explanation:
- "DeleteUser" → operation name (can be anything)
- "deleteUser" → endpoint
- id: "1" → argument passed to resolver (similar to URL param in REST)
- Last {} → selecting what to return after delete
  GraphQL allows returning deleted record details
*/


/*
REST vs GraphQL:
REST    → Server decides response structure
GraphQL → Client decides response structure
GraphQL has ONE endpoint → /graphql
Resolver = function that fetches/modifies data
Arguments = data sent to backend

*/


module.exports = { typeDefs }