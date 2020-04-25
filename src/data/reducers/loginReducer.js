import * as loginActions from '../actions/loginActions';

export default function login(state = {
  isAuthenticated: null,
}, action) {
  switch (action.type) {
    case loginActions.LOGIN_REQUEST:
      return state;
    case loginActions.LOGIN_SUCCESS:
      return { ...state, isAuthenticated: true };
    case loginActions.LOGIN_FAILURE:
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}
