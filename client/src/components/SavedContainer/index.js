import React, { useState, useEffect } from "react";
import SavedCard from "../SavedCard";
import API from "../../utils/API";
import "./style.css";

function SavedContainer() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleDelete(event) {
    event.preventDefault();
    console.log(books);
    let savedBook = books.filter((book) => book._id === event.target.id);
    savedBook = savedBook[0]._id;
    console.log(savedBook);
    API.deleteBook(savedBook)
      .then(window.location.reload(false))
      .catch((err) => console.log(err));
  }

  return (
    <div className="jumbotronWrapper">
      <div className="jumbotron savedContainer">
        <p className="lead savedHeader">Saved Books</p>
        {books.length ? (
          <>
            {books.map((book) => (
              <SavedCard
                key={book._id}
                id={book._id}
                title={book.title}
                author={book.author}
                description={book.description}
                image={book.image}
                href={book.link}
                handleDelete={handleDelete}
              />
            ))}
          </>
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  );
}

export default SavedContainer;
