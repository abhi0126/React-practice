// CRUD Operation on Book Store, Only Redux

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const FETCH_ALL_BOOKS = 'FETCH_ALL_BOOKS';
const ADD_BOOK = 'ADD_BOOK';
const DELETE_BOOK = 'DELETE_BOOK';

const fetchAllBooksActionCreator = () => {
    return {
        type: FETCH_ALL_BOOKS,
        payload: [
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
          ]
    }
}

const addBookActionCreator = () => {
    return {
        type: ADD_BOOK,
        payload: {
            id: 103,
            bookTitle: "Harry Potter and the Sorcerers' Stone",
            bookAuthor: "J.K.Rowling",
            bookGenre: "Fiction",
            bookCost: "600",
            bookImageUrl:
              "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          }
    }
}

const deleteBookActionCreator = (bookId) => {
    return {
        type: DELETE_BOOK,
        payload: bookId
    }
}

const initialState = {
    data: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    // Return a new State
    switch(action.type) {
        case FETCH_ALL_BOOKS:
            return {
                ...state,
                data: action.payload
            }
        case ADD_BOOK:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case DELETE_BOOK:
            return {
                ...state,
                data: state.data.filter((eachBook) => eachBook.id !== action.payload)
            }
        default:
            return state; 
    }
}

const store = createStore(reducer);

console.log('Initial State : ', store.getState());

store.dispatch(fetchAllBooksActionCreator());
const unsubscribe = store.subscribe(() => console.log('Updated State : ', store.getState()));

store.dispatch(deleteBookActionCreator(101));
const unsubscribe1 = store.subscribe(() => console.log('Updated State after delete : ', store.getState()));

store.dispatch(addBookActionCreator());
const unsubscribe2 = store.subscribe(() => console.log('Updated State after add : ', store.getState()));

unsubscribe();
unsubscribe1();
unsubscribe2();





