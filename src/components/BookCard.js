import React from "react";

class BookCard extends React.Component {
  render() {
    const { eachBook, update } = this.props;

    return (
      <div>
        <div>
          <p>The Image Will Come Here</p>
          <p>{eachBook.id}</p>
          <h1 >{eachBook.title}</h1>
          <span>{eachBook.shelf}</span>
        </div>
        <div>
          <select
            value={eachBook.shelf ? eachBook.shelf : "none"}
            onChange={e => update(eachBook, e.target.value)}
          >
            <option value="move" disabled>Move to...</option>
            <option value="read">Read</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want To Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    );
  }
}

export default BookCard;
