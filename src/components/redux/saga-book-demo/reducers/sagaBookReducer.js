import { SAGA_FETCH_ALL_BOOKS_SUCCESS } from "../actions/sagaActionTypes"

const initialState = {
    data: [],
    error: ''
}

const sagaBookReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAGA_FETCH_ALL_BOOKS_SUCCESS:
            return {
                ...state,
                data: [...action.payload]
            }
        default:
            return state;
    }
}

export default sagaBookReducer;