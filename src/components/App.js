import React from "react";
import "../App.css";
import * as BooksApis from "../utils/BooksAPI";
import Shelf from "./Shelf";

class App extends React.Component {
  state = {
    books: []
    // currentlyReading:[],
    // wantToRead :[],
    // read: []
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

  render() {
    console.log(this.state);
    return (
      <div>
        <Shelf update={this.updateBook} books={this.state.books} />
      </div>
    );
  }
}

export default App;
