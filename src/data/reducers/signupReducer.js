import * as signupActions from '../actions/signupActions';

export default function login(state = {
  isAuthenticated: null,
  token: null,
}, action) {
  switch (action.type) {
    case signupActions.SIGNUP_REQUEST:
      return state;
    case signupActions.SIGNUP_SUCCESS:
      return state;
    case signupActions.SIGNUP_FAILURE:
      return state;
    default:
      return state;
  }
}
