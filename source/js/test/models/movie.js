const { model, Schema } = require('mongoose');

const movieSchema = new Schema({
    title: String,
    date: Number
});

module.exports = model('Movie', movieSchema);
