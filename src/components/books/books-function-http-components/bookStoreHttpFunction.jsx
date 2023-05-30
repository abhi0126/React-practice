import { useEffect, useState } from "react";
import React from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import BookItemHttpFunction from "./bookItemHttpFunction";

function BookStoreHttpFunction() {
  const navigate = useNavigate();
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/books')
    .then((response)=>response.json())
    .then((data)=>{
      setAllBooks(data);
    })
    .catch((err)=> console.log(err))
  }, [])

  const [title, setTitle] = useState("LIST OF BOOKS");
  const [name, setName] = useState("Abhishek");

  const renderAllBooks = () => {
    return allBooks.map((eachBook) => (
      <BookItemHttpFunction
        key={eachBook.id}
        data={eachBook}
        onDelete={() => handleDelete(eachBook)}
        onView={() => handleView(eachBook)}
      ></BookItemHttpFunction>
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

export default BookStoreHttpFunction;
