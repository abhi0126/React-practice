import { createStore } from "redux";
import sagaBookReducer from "../reducers/sagaBookReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from 'redux-saga';
import bookSaga from "../saga/bookSaga";

// const sagaStore = createStore(sagaBookReducer);
const sagaMiddleWare = createSagaMiddleWare();

const sagaStore = configureStore({
    reducer: sagaBookReducer,
    middleware: [sagaMiddleWare]
});

sagaMiddleWare.run(bookSaga);

export default sagaStore;