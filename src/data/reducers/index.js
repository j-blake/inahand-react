import { combineReducers } from 'redux';
import account from './accountReducer';
import category from './categoryReducer';
import login from './loginReducer';

export default combineReducers({ account, category, login });
