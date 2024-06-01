const books = require("../models/bookModel");

//  get all books
exports.getBooks = async (req, res) => {
  try {
    const allBooks = await books.find();
    res.json(allBooks);
  } catch (err) {
    console.log(err);
  }
};

//create a book
exports.createBook = async (req, res) => {
  try {
    const newBook = new books(req.body);
    await newBook.save();
    res.status(200).json(newBook);
  } catch (err) {
    console.log(err);
  }
};

//get a single book
exports.getBook = async (req, res) => {
  try {
    const { _id } = req.params;
    const book = await books.findById(_id);
    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json("no book found");
    }
  } catch (err) {
    console.log(err);
  }
};

//update a book
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await books.findById(id);
    if (book) {
      const updatedBook = await books.findByIdAndUpdate(id, req.body);
      res.status(200).json(updatedBook);
    } else {
      res.status(404).json("no book found");
    }
  } catch (err) {
    console.log(err);
  }
};

//delete a book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await books.findById(id);
    if (book) {
      const deletedBook = await books.findByIdAndDelete(id);
      res.status(200).json(deletedBook);
    } else {
      res.status(404).json("no book found");
    }
  } catch (err) {
    console.log(err);
  }
};


