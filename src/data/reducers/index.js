import { combineReducers } from 'redux';
import account from './accountReducer';
import category from './categoryReducer';
import authentication from './authenticationReducer';

// todo https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store

const appReducer = combineReducers({
  account,
  category,
  authentication,
});

const rootReducer = (state, action) => {
  const validState = ['LOGOUT_SUCCESS', 'LOGOUT_FAILURE'].includes(action.type) ? undefined : state;
  return appReducer(validState, action);
};

export default rootReducer;
