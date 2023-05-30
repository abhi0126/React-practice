// create an action object
// create a reducer function
// create store

const redux = require("redux");
const createStore = redux.createStore;

const PURCHASE_A_BOOK = 'PURCHASE_A_BOOK';

function purchaseBookActionCreator() {
    return {
        type: PURCHASE_A_BOOK,
        payload: ''
    }
}

const initialState = {
    numOfBooks: 100
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case PURCHASE_A_BOOK:
            return {
                ...state,
                numOfBooks: state.numOfBooks - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log('Initial Store Inventory - Num Of Books : ', store.getState());
const unsubscribe = store.subscribe(()=>console.log('Current Store Inventory - Num Of Books : ', store.getState()));
store.dispatch(purchaseBookActionCreator());
store.dispatch(purchaseBookActionCreator());
store.dispatch(purchaseBookActionCreator());

unsubscribe();

