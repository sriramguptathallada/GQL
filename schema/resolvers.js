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
        movies: () => {
            return MovieList
        },
        movie: (_, args) => {
            const movieName = args.name
            const movie = MovieList.find((m) => m.name === movieName)
            return movie;
        }
    },
    User: {
        // Note: Even though `favoriteMovies` is defined in the User type,
        // we still need a resolver here to return dynamic/custom data.

        favoriteMovies: () => {
            return MovieList.filter(movie => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
            )
        }
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastId = UserList[UserList.length - 1].id;
            user.id = lastId + 1;
            UserList.push(user)
            return user;
        },
        updateUsername: (parent, args) => {
            const { id, newUsername } = args.input
            let userUpdated;
            UserList.forEach((user) => {
                if (user.id === Number(id)) {
                    user.username = newUsername
                    userUpdated = user
                }
            })
            return userUpdated;

        }
    }
}

module.exports = { resolvers }