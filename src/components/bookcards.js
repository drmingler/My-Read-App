import React  from "react";

class BookCard  extends React.Component{
    render() {
        const {books} = this.props;
        return (
            <div>
                <p> The first card </p>
                <ol>
                    {books.map((book)=>(
                        <li key={book.id}>
                            <p>{book.id}</p>
                            <p>{book.title}</p>
                            <p>{book.shelf}</p>
                        </li>
                    ))}

                </ol>
            </div>
        )
    }
}

export default BookCard;