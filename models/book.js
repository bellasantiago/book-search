const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;