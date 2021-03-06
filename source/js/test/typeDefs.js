const { gql } = require('apollo-server');

module.exports = gql`
    type Movie {
        id: ID!
        title: String
        date: Int
    }
    type Query {
        getMovies: [Movie]
    }
`;