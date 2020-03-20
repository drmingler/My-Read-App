import React from "react";
import Read from "./Read";
import WantToRead from "./WantToRead";
import CurrentlyReading from "./CurrentlyReading";
import { Link } from "react-router-dom";

class Shelf extends React.Component {
  render() {
    const { books, updateBook } = this.props;
    return (
      <div className={"list-books"}>
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className={"list-books-content"}>
          <div>
            <Read update={updateBook} booksList={books} />
            <CurrentlyReading update={updateBook} booksList={books} />
            <WantToRead update={updateBook} booksList={books} />
            <div>
              <Link className={"open-search"} to={"/search"}>
                To Search Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
