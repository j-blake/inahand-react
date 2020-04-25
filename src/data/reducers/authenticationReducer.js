import * as actions from '../actions/authenticationActions';

export default function authenticationReducer(state = { isAuthenticated: null }, action) {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return state;
    case actions.LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    case actions.LOGIN_FAILURE:
      return { ...state, isAuthenticated: false };
    case actions.LOGOUT_REQUEST:
      return state;
    case actions.LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false };
    case actions.LOGOUT_FAILURE:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}
