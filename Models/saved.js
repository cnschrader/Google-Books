const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, requred: true },
    authors: { type: Array, required: true},
    description: String,
    image: String,
    link: String
});

const Book = mongoose.model('Book', bookSchema);

module.export = Book;