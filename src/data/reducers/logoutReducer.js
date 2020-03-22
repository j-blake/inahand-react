import * as logoutActions from '../actions/logoutActions';

export default function login(state = {
  isAuthenticated: null,
  token: null,
}, action) {
  switch (action.type) {
    case logoutActions.LOGOUT_REQUEST:
      return state;
    case logoutActions.LOGOUT_SUCCESS:
      return { ...state, isAuthenticated: false, token: null };
    case logoutActions.LOGOUT_FAILURE:
      return { ...state, isAuthenticated: false, token: null };
    default:
      return state;
  }
}
