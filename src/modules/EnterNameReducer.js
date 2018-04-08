import { ENTER_NAME } from '../constants/actionTypes';
const INITAIL_STATE = {
    name: ''
};
export default (state = INITAIL_STATE, action) => {
    switch (action.type) {
        case ENTER_NAME: {
            return {
                ...state, name: action.payload
            };
        }
        default:
            return state;
    }
}