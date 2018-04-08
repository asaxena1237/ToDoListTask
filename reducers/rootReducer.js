import { combineReducers } from 'redux';
import EnterNameReducer from '../src/modules/EnterNameReducer';
import AddToDoReducer from '../src/modules/AddToDoReducer';

const rootReducer = combineReducers({
    enterNameReducer: EnterNameReducer,
    addToDoReducer: AddToDoReducer
})

export default rootReducer;