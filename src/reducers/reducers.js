import { combineReducers } from 'redux';
import RegisterReducer from './registerReducer';
import LoginReducer from './loginReducer';

const rootReducer = combineReducers({
    RegisterReducer, LoginReducer
})

export default rootReducer;