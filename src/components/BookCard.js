import React  from "react";

class BookCard  extends React.Component{
    render() {
        const {eachBook} = this.props;
        return (
            <div>
                <p> The first card </p>
                <div>
                    <p>The Image Will Come Here</p>
                    <p>{eachBook.id}</p>
                    <span>{eachBook.title}</span>
                    <span>{eachBook.shelf}</span>

                </div>
            </div>
        )
    }
}

export default BookCard;