import React from "react";
import Read from "./Read";
import WantToRead from "./WantToRead";
import CurrentlyReading from "./CurrentlyReading";

class Shelf extends React.Component{
    render() {
        const {books} = this.props;
        return (
            <div>
                <Read booksList={books}/>
                <CurrentlyReading booksList={books}/>
                <WantToRead booksList={books}/>
            </div>
        )
    }
}

export default Shelf;