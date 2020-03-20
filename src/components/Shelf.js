import React from "react";
import Read from "./Read";
import WantToRead from "./WantToRead";
import CurrentlyReading from "./CurrentlyReading";
import { Link } from "react-router-dom";

class Shelf extends React.Component {
  render() {
    const { books, update } = this.props;
    return (
      <div>
        <Read update={update} booksList={books} />
        <CurrentlyReading update={update} booksList={books} />
        <WantToRead update={update} booksList={books} />
        <div>
          <Link
              to={"/search"}
          >To Search Page</Link>
        </div>
      </div>
    );
  }
}

export default Shelf;
