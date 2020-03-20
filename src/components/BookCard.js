import React from "react";

class BookCard extends React.Component {
  render() {
    const { eachBook, update } = this.props;

    return (
      <div className={"book"}>
        <div className={"book-top"}>
          <div
            className={"book-cover"}
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${eachBook.imageLinks.thumbnail})`
            }}
          >
          </div>
          <div className={"book-shelf-changer"}>
            <select
              value={eachBook.shelf ? eachBook.shelf : "none"}
              onChange={e => update(eachBook, e.target.value)}
            >
              <option value={"move"} disabled>
                Move to...
              </option>
              <option value={"read"}>Read</option>
              <option value={"currentlyReading"}>Currently Reading</option>
              <option value={"wantToRead"}>Want To Read</option>
              <option value={"none"}>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{eachBook.title}</div>
        <div className="book-authors">{eachBook.authors}</div>
      </div>
    );
  }
}

export default BookCard;
