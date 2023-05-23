import logo from "./logo.svg";
import "./App.css";
import Display from "./components/display";
import React from 'react';
import Counter from "./components/counter";
import ListColors from "./components/listColors";
import BookStore from "./components/books/books-class-components/bookStore";
import BookStoreFunction from "./components/books/books-function-components/bookStoreFunction";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import BookAddFunction from "./components/books/books-function-components/boookAddFunction";
import BookViewFunction from "./components/books/books-function-components/bookViewFunction";

function App() {
  return (
    // <React.Fragment>
    //   <h2>App Component!</h2>
    //   {/* <Display /> */}
    //   {/* <Counter /> */}
    //   {/* <ListColors /> */}
    //   {/* <BookStore /> */}
    //   <BookStoreFunction />
    // </React.Fragment>
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Display />}></Route>
        <Route path='counter' element={<Counter />}></Route>
        <Route path='list-colors' element={<ListColors />}></Route>
        <Route path='book-store-class' element={<BookStore />}></Route>
        <Route path='book-store-function' element={<BookStoreFunction />}>
          <Route path='book-view-function/:bookId' element={<BookViewFunction />}></Route>
        </Route>
        <Route path='book-add-function' element={<BookAddFunction />}></Route>

      </Routes>
    </div>

  );
}

export default App;
