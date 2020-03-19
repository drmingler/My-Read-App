import React from "react";
import BookCard from "./BookCard";

class WantToRead extends React.Component {
  render() {
    const { booksList, update } = this.props;
    return (
      <div>
        <h1>Want To Read</h1>
        <ol>
          {booksList.map(
            book =>
              book.shelf === "wantToRead" && (
                <li key={book.id}>
                  <BookCard eachBook={book} update={update}/>
                </li>
              )
          )}
        </ol>
      </div>
    );
  }
}

export default WantToRead;
