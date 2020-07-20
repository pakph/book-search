import React from "react";
import "./style.css";

function Search(props) {
  return (
    <div className="jumbotronWrapper searchWrapper">
      <div className="jumbotron searchContainer">
        <p className="lead searchHeader">Book Search</p>
        <form>
          <div className="form-group">
            <label className="searchLabel" htmlFor="search"></label>
            <input
              onChange={props.handleInputChange}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for a book"
              id="search"
            />
            <br />
            <button
              onClick={props.handleSearchSubmit}
              className="btn btn-primary searchBtn"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
