const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String },
  authors: { type: Array },
  description: { type: String },
  image: { type: Blob },
  link: { type: String },
  date: { type: Date, default: Date.now },
});

const Book = mongoose.model('Book', bookSchema);

module.export = Book;
