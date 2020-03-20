import React from "react";
import BookCard from "./BookCard";
import {Link} from "react-router-dom";

class Search extends React.Component {
  state = {
    query: ""
  };

  fetchBooks = () => {
    const { query } = this.state;
    this.props.searchBooks(query.trim());
  };
  handleChange = query => {
    this.setState(
      () => ({
        query: query
      }),
      () => this.fetchBooks()
    );
  };
  render() {
    const { query } = this.state;
    const { queryList, update } = this.props;
    return (
      <div>
        <div>
          <input
            type={"Text"}
            value={query}
            placeholder={"Search Books"}
            onChange={event => this.handleChange(event.target.value)}
          />
          {JSON.stringify(this.state.query)}
          <div>
            <Link to={'/'}>
              To Home
            </Link>
          </div>
        </div>
        <div>
          <ol>
            {queryList.map(book => (
              <li key={book.id}>
                <BookCard update={update} eachBook={book} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
