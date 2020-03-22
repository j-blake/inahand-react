import { combineReducers } from 'redux';
import account from './accountReducer';
import category from './categoryReducer';
import login from './loginReducer';
import logout from './logoutReducer';

export default combineReducers({
  account,
  category,
  login,
  logout,
});
