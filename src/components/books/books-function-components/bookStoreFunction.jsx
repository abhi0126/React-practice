import { useState } from "react";
import React from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import BookItemFunction from "./bookItemFunction";

function BookStoreFunction() {
  const navigate = useNavigate();
  const [allBooks, setAllBooks] = useState([
    {
      id: 101,
      bookTitle: "Harry Potter and the Order Of Phoenix",
      bookAuthor: "J.K.Rowling",
      bookGenre: "Fiction",
      bookCost: "200",
      bookImageUrl:
        "https://images.unsplash.com/photo-1609866138210-84bb689f3c61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=469&q=80",
    },
    {
      id: 102,
      bookTitle: "Harry Potter and the Sorcerers' Stone",
      bookAuthor: "J.K.Rowling",
      bookGenre: "Fiction",
      bookCost: "300",
      bookImageUrl:
        "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
  ]);
  const [title, setTitle] = useState("LIST OF BOOKS");
  const [name, setName] = useState("Abhishek");

  const renderAllBooks = () => {
    return allBooks.map((eachBook) => (
      <BookItemFunction
        key={eachBook.id}
        data={eachBook}
        onDelete={() => handleDelete(eachBook)}
        onView={() => handleView(eachBook)}
      ></BookItemFunction>
    ));
  };

  const handleDelete = (eachBook) => {
    let allBook = allBooks;
    allBook = allBook.filter((eBook) => eBook.id !== eachBook.id);
    setAllBooks(allBook);
  };

  const handleView = (eachBook) => {
    console.log('handle View called');
    navigate(`book-view-function/${eachBook.id}`);
  }

  const handleNameUpdate = () => {
    setName("Priya");
  };

  const handleAddNewBook = () => {
    // navigate to book-add-function
    navigate('/book-add-function');
  }

  return (
    <div className="container m-5">
      <h1>{title}</h1>
      <button type="button" className="btn btn-success" onClick={handleAddNewBook}>ADD NEW BOOK</button>
      <Outlet></Outlet>
      <table className="table">
        <thead className="bg-dark text-white">
          <tr>
            <th>ID</th>
            <th>IMAGE</th>
            <th>TITLE</th>
            <th>AUTHOR</th>
            <th>GENRE</th>
            <th>COST</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{renderAllBooks()}</tbody>
      </table>
      <h5>{name}</h5>
      <button onClick={handleNameUpdate}>Update Name</button>
    </div>
  );
}

export default BookStoreFunction;
