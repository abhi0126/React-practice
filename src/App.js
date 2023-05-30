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
import BookStoreHttpFunction from "./components/books/books-function-http-components/bookStoreHttpFunction";
import BookViewHttpFunction from "./components/books/books-function-http-components/bookViewHttpFunction";
import BookAddHttpFunction from "./components/books/books-function-http-components/boookAddHttpFunction";
import CookiesContainer from "./components/react-redux-cookie-demo/components/cookiesContainer";
import { Provider } from "react-redux";
// import store from "./components/react-redux-cookie-demo/store/store";
import BookStoreReduxFunction from "./components/redux/react-redux-book-demo/components/bookStoreReduxFunction";
import store from "./components/redux/react-redux-book-demo/store/store";

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
    <Provider store={store}>
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

          <Route path='book-store-http-function' element={<BookStoreHttpFunction />}>
            <Route path='book-view-http-function/:bookId' element={<BookViewHttpFunction />}></Route>
          </Route>
          <Route path='book-add-http-function' element={<BookAddHttpFunction />}></Route>
          <Route path='cookies-container-redux' element={<CookiesContainer />}></Route>
          <Route path='book-store-redux-function' element={<BookStoreReduxFunction />}></Route>
        </Routes>
      </div>
    </Provider>

  );
}

export default App;
