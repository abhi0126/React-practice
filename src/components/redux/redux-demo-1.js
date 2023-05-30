// Steps -
//  1. Install redux
//  2. Coding
//  3. Run with node

// Code
//  1. create the action object - this step is not required

const redux = require('redux');
const createStore = redux.createStore;

const BUY_A_COOKIE = 'BUY_A_COOKIE';

// {
//   types: BUY_A_COOKIE;
//   payload: ''
// }

// 2. Create an action creator functon - this will return the action object

function buyCookieActionCreator() {
  return {
    type: BUY_A_COOKIE,
    payload: ''
  }
}

// 3. create the reducer function

const initialState = {
  numOfCookies: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_A_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies - 1
      }
      default:
        return state;
  }
}

// 4. Implement the redux store
const store = createStore(reducer);
console.log('Initial State of the store :', store.getState());

store.subscribe(()=>console.log('Current State : ', store.getState()));

store.dispatch(buyCookieActionCreator());
store.dispatch(buyCookieActionCreator());