import React from "react";
import Card from "../Card";

function ResultsContainer(props) {
  return (
    <div className="jumbotronWrapper">
      <div className="jumbotron resultsContainer">
        <p className="lead resultsHeader">Results</p>
        {props.data.length ? (
          <>
            {props.data.map((book) => (
              <Card
                id={book.id}
                key={book.id}
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors[0]}
                description={book.volumeInfo.description}
                img={book.volumeInfo.imageLinks.thumbnail}
                href={book.volumeInfo.previewLink}
                handleSave={props.handleSave}
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

export default ResultsContainer;
