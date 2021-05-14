import axios from "axios";

export default {
    getAll: function (bookSearch) {
      return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`);
    },
    saveBook: function (bookData) {
      return axios.post("/api/books", bookData).then(result => result.data);
    },
    mySaved: function () {
      return axios.get("/api/books").then(result => result.data);
    },
     deleteBook: function (id) {
        return axios.delete("/api/books/" + id).then(result => result.data);
      },
  };