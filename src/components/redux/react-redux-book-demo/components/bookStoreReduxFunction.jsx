import { useEffect, useState } from "react";
import React from "react";
import BookItemReduxFunction from "./bookItemReduxFunction";
import fetchAllBooksActionCreator from "../actions/fetchAllBooksActionCreator";
import { connect } from "react-redux";

function BookStoreReduxFunction(props) {
  // const [allBooks, setAllBooks] = useState([]);
  const [title, setTitle] = useState("LIST OF BOOKS");

  useEffect(()=>{
    props.fetchAllBookProps()
  }, [])

  const renderAllBooks = () => {
    console.log('props', props);
    return props.allBooksProps.map((eachBook) => (
      <BookItemReduxFunction
        key={eachBook.id}
        data={eachBook}
      ></BookItemReduxFunction>
    ));
  };

  return (
    <div className="container m-5">
      <h1>{title}</h1>
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
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {    
    allBooksProps: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBookProps: ()=>dispatch(fetchAllBooksActionCreator())
  }
}

// export default BookStoreReduxFunction;
export default connect(mapStateToProps, mapDispatchToProps)(BookStoreReduxFunction);
