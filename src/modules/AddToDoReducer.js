import { ADD_TODO, CLEAR_TODO_TEXT } from '../constants/actionTypes';
const INITIAL_STATE = {
    task: '',
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state, task: action.payload
            }
        }
        case CLEAR_TODO_TEXT: {
            return {
                ...state, task: ''
            }
        }
        default:
            return state;
    }
}