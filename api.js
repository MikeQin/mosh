const Joi = require("joi");
const express = require("express");
const router = express.Router();
const Book = require("./model/book");

const books = [
  { id: 1, title: "book1" },
  { id: 2, title: "book2" },
  { id: 3, title: "book3" }
];

router.get("/books", (req, res) => {
  res.send(books);
});

router.post("/books", (req, res) => {
  // const book = new Book(req.body);
  // book.save();
  Book.create(req.body).then(book => {
    // promise
    res.send(book);
  });
});

module.exports = router;