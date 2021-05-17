import axios from "axios";

// eslint-disable-next-line
export default {
  getBooks: function (bookSearch) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`);
  },
  myBooks: function () {
    return axios.get("/api/books").then(result => result.data)
    .catch(err => {throw err});
  },
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  }
}