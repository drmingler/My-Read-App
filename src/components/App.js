import React from "react";
import "../App.css";
import * as BooksApis from "../utils/BooksAPI";
import Search from "./Search";
import Shelf from "./Shelf";
import { Route } from "react-router-dom";
import Style from "./styling";

class App extends React.Component {
  state = {
    books: [],
    search: []
  };
  componentDidMount() {
    BooksApis.getAll().then(data => {
      console.log(data)
      this.setState(() => ({
        books: data
      }));
    });
  }

  updateBook = (book, shelf) => {
    BooksApis.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books
          .filter(eachBookInShelf => eachBookInShelf.id !== book.id)
          .concat([book])
      }));
    });
  };

  searchBooks = query => {
    // If the search query is empty set the search state to an empty array
    if (!query) {
      return this.setState(() => ({
        search: []
      }));
    }
    // Otherwise fetch the result from the server
    BooksApis.search(query).then(data => {
      const searchResult = !data || data.error ? [] : data;
      this.setState(prevState => ({
        search: searchResult.map(eachBookInSearch => {
          const matchingBook = prevState.books.filter(
            book => eachBookInSearch.id === book.id
          );
          eachBookInSearch.shelf =
            matchingBook.length > 0 ? matchingBook[0].shelf : "none";
          return eachBookInSearch;
        })
      }));
    });
  };

  render() {
    console.log("Search ", this.state.search);
    console.log("Books", this.state.books);
    return (
      <div>
        <Route
          exact
          path={"/"}
          render={() => (
            <Shelf update={this.updateBook} books={this.state.books} />
          )}
        />
        <Route
          exact
          path={"/search"}
          render={() => (
            <Search
              update={this.updateBook}
              queryList={this.state.search}
              searchBooks={this.searchBooks}
            />
          )}
        />
        <Route path={'/style'} component={Style}/>
      </div>
    );
  }
}

export default App;

