const { UserList, MovieList } = require('../fakeData')
const _ = require('lodash')
const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id
            const user = UserList.find((u) => u.id === Number(id))
            return user;

        },
        movies: ()=>{
            return MovieList
        },
        movie: (_,args)=>{
            const movieName = args.name
            const movie = MovieList.find((m)=>m.name === movieName)
            return movie;
        }
    }
}

module.exports = { resolvers }