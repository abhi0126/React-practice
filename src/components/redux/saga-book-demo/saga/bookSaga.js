import { takeEvery, put } from 'redux-saga/effects';
import { SAGA_FETCH_ALL_BOOKS } from '../actions/sagaActionTypes';
import sagaFetchAllBooksSuccessActionCreator from '../actions/sagaFetchAllBooksSuccessActionCreator';
import axios from 'axios';

// create a watcher saga
function* bookSaga() {
    yield takeEvery(SAGA_FETCH_ALL_BOOKS, getAllBooks)
}


// create a worker saga
function* getAllBooks() {
    console.log('getBook worker saga called...');
    // let data = yield fetch('http://localhost:4000/books');
    let response = yield axios.get('http://localhost:4000/books');
    if (response.status === 200) {
        let dataJson = yield response.data
        console.log('dataJson : ', dataJson);
        yield put(sagaFetchAllBooksSuccessActionCreator(dataJson))
    }
}

export default bookSaga;