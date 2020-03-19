import React from "react";
import BookCard from "./BookCard";

class CurrentlyReading extends React.Component {
  render() {
    const { booksList, update } = this.props;
    return (
      <div>
        <h1>Currently Reading</h1>
        <ol>
          {booksList.map(
            book =>
              book.shelf === "currentlyReading" && (
                <li key={book.id}>
                  <BookCard eachBook={book} update={update} />
                </li>
              )
          )}
        </ol>
      </div>
    );
  }
}

export default CurrentlyReading;
