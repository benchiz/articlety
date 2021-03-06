const Movie = require('/graphQL/models/movie');

module.exports = {
    Query: {
        async getMovies() {
            try {
                const movies = await Movie.find();
                return movies;
            } catch(err) {
                console.log(err);
            }
        }
    }
};