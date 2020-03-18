import React from "react";
import BookCard from "./BookCard";

class Read extends React.Component {
  render() {
    const { booksList } = this.props;
    return (
      <div>
        <h1>Read</h1>
        <ol>
          {booksList.map(book => (
            <li key={book.id}>
              <BookCard eachBook={book} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Read;
