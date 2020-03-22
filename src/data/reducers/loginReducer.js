import * as loginActions from '../actions/loginActions';

export default function login(state = {
  isAuthenticated: null,
  token: null,
}, action) {
  switch (action.type) {
    case loginActions.LOGIN_REQUEST:
      return state;
    case loginActions.LOGIN_SUCCESS:
      return { ...state, token: action.token, isAuthenticated: true };
    case loginActions.LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, token: false };
    default:
      return state;
  }
}
