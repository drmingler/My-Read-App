import React from "react";
import "../App.css";
import BookCard from "./bookcards";
import * as BooksApis  from "../utils/BooksAPI";

class App extends React.Component {
  state = {
      books:[]
  };
  componentDidMount() {
      BooksApis.update({id:"tsRhkvo80iUC"},"wantToRead").then((data)=>(console.log(data)))
      BooksApis.search("Fitness").then((data)=>{
          console.log(data)
      })
      BooksApis.get("tsRhkvo80iUC").then((data)=>(console.log(data)))
    BooksApis.getAll().then((data)=>{
      this.setState(()=>({
            books : data
          }
      ))
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <BookCard books={this.state.books}/>
      </div>
    );
  }
}

export default App;
