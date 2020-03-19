import React from "react";
import "../App.css";
import * as BooksApis from "../utils/BooksAPI";
import Shelf from "./Shelf";
import Search from "./Search";

class App extends React.Component {
  state = {
    books: [],
    search : []
    // currentlyReading:[],
    // wantToRead :[],
    // read: []
    //<Shelf update={this.updateBook} books={this.state.books} />
  };
  componentDidMount() {
    // BooksApis.update({id:"jAUODAAAQBAJ"},"read").then((data)=>(console.log(data)))
    BooksApis.search("Fitness").then(data => {
      console.log(data);
    });
    // BooksApis.get("tsRhkvo80iUC").then(data => console.log(data));
    BooksApis.getAll().then(data => {
      this.setState(() => ({
        books: data
      }));
    });
  }

  updateBook = (book, shelf) => {
    BooksApis.update(book, shelf).then(() =>
      BooksApis.getAll().then(data => {
        this.setState(() => ({
          books: data
        }));
      })
    );
  };

  searchBooks = (query) => {
    // If the search query is empty set the search state to an empty array
    if(!query){
      return this.setState(()=>({
        search: []
      }))
    }
    // Otherwise fetch the result from the server
    BooksApis.search(query).then(data => {
      this.setState(()=>({
        search: !data || data.error ? [] : data
      }))
    })
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Search update={this.updateBook} queryList={this.state.search} searchBooks={this.searchBooks} />
      </div>
    );
  }
}

export default App;
