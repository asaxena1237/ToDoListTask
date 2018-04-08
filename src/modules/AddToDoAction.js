import { ADD_TODO, CLEAR_TODO_TEXT } from '../constants/actionTypes';

export const onAddToDo = (text) => {
    return {
        type: ADD_TODO,
        payload: text
    }
}

export const clearText = () => {
    type: CLEAR_TODO_TEXT
}