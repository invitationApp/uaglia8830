import { combineReducers } from 'redux';
import { userReducer as user } from './Reducers/UserReducer';

export default combineReducers({
    user,
});