import React from "react";
import BookCard from "./BookCard";
import { Link } from "react-router-dom";

class Search extends React.Component {
  state = {
    query: ""
  };

  // Reset the query state before rendering the search page
  componentDidMount() {
    this.handleChange('')
  }

 /* The function below passes the search query
 * in the state to the onSearch prop*/
  fetchBooks = () => {
    const { query } = this.state;
    this.props.onSearch(query.trim());
  };
  handleChange = query => {
    this.setState(
      () => ({
        query: query
      }),
        // Invoke this call back function whenever the state is updated
      () => this.fetchBooks()
    );
  };

  render() {
    const { query } = this.state;
    const { queryList, updateBook } = this.props;
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
                <BookCard update={updateBook} eachBook={book} />
              </li>
            )))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
