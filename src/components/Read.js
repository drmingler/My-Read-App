import React from "react";
import BookCard from "./BookCard";

class Read extends React.Component {
  render() {
    const { booksList, update } = this.props;
    return (
      <div className={"bookshelf"}>
        <div>
          <h2 className={"bookshelf-title"}>Read</h2>
          <div className={"bookshelf-books"}>
            <ol  className={"books-grid"}>
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
        </div>
      </div>
    );
  }
}

export default Read;
