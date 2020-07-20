import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const KEY = "&key=AIzaSyAkpfxqPqYYw5HpZ4Q-T8z_O5FTLx1es-w";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Search a book using Google Books API
  search: function (query) {
    return axios.get(BASEURL + query + KEY);
  },
};
