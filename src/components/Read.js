import React from "react";
import BookCard from "./BookCard";

class Read extends React.Component {
  render() {
    const { booksList, update } = this.props;
    return (
      <div>
        <h1>Read</h1>
        <ol>
          {booksList.map(
            book =>
              book.shelf === "read" && (
                <li key={book.id}>
                  <BookCard update={update} eachBook={book} />
                </li>
              )
          )}
        </ol>
      </div>
    );
  }
}

export default Read;
