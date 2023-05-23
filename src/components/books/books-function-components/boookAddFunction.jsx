import React, { useState } from 'react';

function BookAddFunction() {
    const [title, setTitle] = useState('ADD NEW BOOK');
    return (
        <div className="container m-5">
          <form>
            <div className="card">
              <div className="card-header bg-success text-white">
                <h2>{title}</h2>
              </div>
              <div className="card-body">
                <div>
                  <label htmlFor="idBookTitle" className="form-label">
                    Book Title:
                  </label>
                  <input
                    type="text"
                    id="idBookTitle"
                    className="form-control"
                  ></input>
                </div>
                <div>
                  <label htmlFor="idBookAuthor" className="form-label">
                    Book Author:
                  </label>
                  <input
                    type="text"
                    id="idBookAuthor"
                    className="form-control"
                  ></input>
                </div>
                <div>
                  <label htmlFor="idBookGenre" className="form-label">
                    Book Genre:
                  </label>
                  <select
                    id="idBookGenre"
                    className="form-control"
                  >
                    <option value="Comedy">Comedy</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Biography">Biography</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="idBookCost" className="form-label">
                    Book Cost:
                  </label>
                  <input
                    type="text"
                    id="idBookCost"
                    className="form-control"
                  ></input>
                </div>
                <div>
                  <label htmlFor="idBookImageUrl" className="form-label">
                    Book Image URL:
                  </label>
                  <input
                    type="text"
                    id="idBookImageUrl"
                    className="form-control"
                  ></input>
                </div>
              </div>
              <div className="card-footer bg-success">
                <button type="submit" className="btn btn-light text-success">
                  ADD
                </button>
              </div>
            </div>
          </form>
        </div>
      );
}

export default BookAddFunction;