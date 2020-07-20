import React, { useState } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer";

function Search() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState({
    volumeInfo: {
      title: "",
      authors: [],
      imageLinks: {
        thumbnail: "",
      },
      previewLink: "",
      description: "",
    },
  });
  const [books, setBooks] = useState([]);

  function searchBooks(query) {
    API.search(query)
      .then((res) => {
        setResults(res.data.items);
        let data = res.data.items;
        data = data.map((book) => {
          book = {
            key: book.id,
            id: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors[0],
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink,
          };
          return book;
        });
        setBooks(data);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    searchBooks(search);
  }

  function handleSave(event) {
    event.preventDefault();
    console.log(results);
    let savedBook = books.filter((book) => book.id === event.target.id);
    savedBook = savedBook[0];
    console.log(savedBook);
    API.saveBook(savedBook)
      .then(console.log("Book is saved"))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <Header />
      <SearchBar
        value={search}
        handleInputChange={handleInputChange}
        handleSearchSubmit={handleSearchSubmit}
      />
      <ResultsContainer data={results} handleSave={handleSave} />
    </>
  );
}

export default Search;
