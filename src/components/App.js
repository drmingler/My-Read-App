import React from "react";
import "../App.css";
import * as BooksApis from "../utils/BooksAPI";
import Search from "./Search";
import Shelf from "./Shelf";
import { Route } from "react-router-dom";


class App extends React.Component {

  /*The books state below stores the list of books returned  from the database
  * and the search state stores all books returned from the search query*/
  state = {
    books: [],
    search: []
  };
  componentDidMount() {
    // Gets all the books before rendering the page
    BooksApis.getAll().then(data => {
      this.setState(() => ({
        books: data,
      }));
    });
  }

  /* Update the books state whenever this function is called
  * passing the new shelf string and the book object */
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

  /* Update the search state  this function is called
  * passing it the query string*/
  searchBooks = query => {
    console.log(query);
    // If the search query is empty set the search state to an empty array
    if (!query) {
     this.setState(() => ({
        search: []
      }));
    }
    // Otherwise fetch the result from the server
    else{
      BooksApis.search(query).then(data => {
        // Check if object returned is valid
        const searchResult = !data || data.error ? [] : data;
        this.setState(prevState => ({
          /* Loop through every book in the search state and
          * compare it with every book in the books state
          * to check if it matches a book already in the book state
          * */
          search: searchResult.map(eachBookInSearch => {
            const matchingBook = prevState.books.filter(
                book => eachBookInSearch.id === book.id
            );
            /* If there is a book that appears in both the books and search state,
            * set the shelf property of that book in the shelf state to exactly
            * the shelf property of the book that matches it in the books state otherwise
            * set it to none */
            eachBookInSearch.shelf =
                matchingBook.length > 0 ? matchingBook[0].shelf : "none";
            // Return a new search object with the updated search results.
            return eachBookInSearch;
          })
        }));
      });
    }
  };

  render() {
    return (
      <div>
        <Route
          exact
          path={"/"}
          render={() => (
            <Shelf updateBook={this.updateBook} books={this.state.books} />
          )}
        />
        <Route
          exact
          path={"/search"}
          render={() => (
            <Search
                updateBook={this.updateBook}
              queryList={this.state.search}
              onSearch={this.searchBooks}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

