import React, { Component } from 'react';
import BookItem from './bookItem';

class BookStore extends Component {
    state = { 
        title: 'Book Store',
        allBooks: [
            {
                "id": 101,
                "bookTitle": "Harry Potter and the Order Of Phoenix",
                "bookAuthor": "J.K.Rowling",
                "bookGenre": "Fiction",
                "bookCost": "200",
                "bookImageUrl": "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80"
              },
              {
                "id": 102,
                "bookTitle": "Harry Potter and the Sorcerers' Stone",
                "bookAuthor": "J.K.Rowling",
                "bookGenre": "Fiction",
                "bookCost": "300",
                "bookImageUrl": "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              }
        ]
     } 
    render() { 
        return (
            <div className='container m-5'>
                <h1>{this.state.title}</h1>
                <table className='table'>
                    <thead className='bg-dark text-white'>
                        <tr>
                            <th>ID</th>
                            <th>IMAGE</th>
                            <th>TITLE</th>
                            <th>AUTHOR</th>
                            <th>GENRE</th>
                            <th>COST</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.retrunAllBooks()}
                    </tbody>
                </table>

            </div>
        );
    }

    retrunAllBooks() {
        return this.state.allBooks.map((book) => (
            <BookItem value={book} onDelete={() => this.handleDelete(book)} key={book.id}></BookItem>
        ))
    }

    handleDelete = (book) => {
        console.log('handle delete called', book);
        let allBook = this.state.allBooks;
        allBook = allBook.filter((eBook) => (eBook.id !== book.id));
        this.setState({allBooks: allBook})
    }
}
 
export default BookStore;