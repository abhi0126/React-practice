import React, { Component } from "react";

class BookItem extends Component {
  state = {};
  render() {
    return (
        <tr key={this.props.value.id}>
          <td>{this.props.value.id}</td>
          <td>
            <img
              src={this.props.value.bookImageUrl}
              width="150px"
              height="100px"
              alt="bookImage"
            ></img>
          </td>
          <td>{this.props.value.bookTitle}</td>
          <td>{this.props.value.bookAuthor}</td>
          <td>{this.props.value.bookGenre}</td>
          <td>{this.props.value.bookCost}</td>
          <td><button type="button" className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(this.props.value)}>Delete</button></td>
        </tr>
    );
  }

  handleDelete = () => {
    console.log('handle delete called');
  }
}

export default BookItem;
