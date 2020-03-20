import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    query: ""
  };

  componentDidMount() {
    this.handleChange('')
  }

  fetchBooks = () => {
    const { query } = this.state;
    this.props.onSearch(query.trim());
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
      <div className={"search-books"}>
        <div className={"search-books-bar"}>
          <Link className={"close-search"} to={"/"}
          >
            To Home Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type={"Text"}
              value={query}
              placeholder={"Search Books"}
              onChange={event => this.handleChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {query && (queryList.map(book => (
              <li key={book.id}>
                <BookCard update={update} eachBook={book} />
              </li>
            )))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
