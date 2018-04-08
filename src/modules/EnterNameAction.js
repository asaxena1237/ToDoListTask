import { ENTER_NAME } from '../constants/actionTypes';

export const enterName = (text) => {
    return {
        type: ENTER_NAME,
        payload: text
    }
}