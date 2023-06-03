import { SAGA_FETCH_ALL_BOOKS_SUCCESS } from "./sagaActionTypes"

const sagaFetchAllBooksSuccessActionCreator = (data) => {
    console.log('data in creator', data);
    return {
        type: SAGA_FETCH_ALL_BOOKS_SUCCESS,
        payload: data
    }
}

export default sagaFetchAllBooksSuccessActionCreator;