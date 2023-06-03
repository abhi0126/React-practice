import { useEffect, useState } from "react";
import React from "react";
import { connect } from "react-redux";
import SagaBookItemReduxFunction from "./sagaBookItemReduxFunction";
import sagaFetchAllBooksActionCreator from "../actions/sagaFetchAllBooksActionCreator";

function SagaBookStoreReduxFunction(props) {
  // const [allBooks, setAllBooks] = useState([]);
  const [title, setTitle] = useState("LIST OF BOOKS");

  useEffect(()=>{
    props.fetchAllBookProps()
  }, [])

  const renderAllBooks = () => {
    console.log('props', props);
    return props.allBooksProps.map((eachBook) => (
      <SagaBookItemReduxFunction
        key={eachBook.id}
        data={eachBook}
      ></SagaBookItemReduxFunction>
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
  return {    
    allBooksProps: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBookProps: ()=>dispatch(sagaFetchAllBooksActionCreator())
  }
}

// export default BookStoreReduxFunction;
export default connect(mapStateToProps, mapDispatchToProps)(SagaBookStoreReduxFunction);
