const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksModel = new Schema(
  {
    title: {
      type: String,
      required:true
    },
    author: {
      type: String,
    },
    publisher: {
      type: String,
    },
    dateOfPublication: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

const books = mongoose.model("books", booksModel);
module.exports = books;
