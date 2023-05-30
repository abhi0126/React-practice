const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_A_COOKIE = 'BUY_A_COOKIE';
const BUY_A_CAKE = 'BUY_A_CAKE';

function buyCookieActionCreator() {
    return {
        type: BUY_A_COOKIE,
        payload: ''
    }
}

function buyCakeActionCreator() {
    return {
        type: BUY_A_CAKE,
        payload: ''
    }
}

const initialCookiesState = {
    numOfCookies: 10
}

const initialCakeState = {
    numOfCakes: 20
}

const cookiesReducer = (state = initialCookiesState, action) => {
    switch(action.type) {
        case BUY_A_COOKIE:
            return {
                ...state,
                numOfCookies: state.numOfCookies - 1
            }
        default:
            return state;
    }
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_A_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cookiesRedKey: cookiesReducer,
    cakeRedKey: cakeReducer
})

const store = createStore(rootReducer);

console.log('Initial State : ', store.getState());

store.subscribe(()=>console.log('Updated State : ', store.getState()));

store.dispatch(buyCookieActionCreator());
store.dispatch(buyCakeActionCreator());

