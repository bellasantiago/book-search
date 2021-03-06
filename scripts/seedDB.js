const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/book-search");

const bookSeed = [
  {
    title: "Test",
    author: "Test",
    link: "",
    image:"",
    description: "Test, test"
  }
];

db.Books.remove({})
  .then(() => db.Books.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
