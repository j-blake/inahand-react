export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export function logoutRequest() {
  return { type: LOGOUT_REQUEST };
}

export function logoutSuccess(token) {
  return { type: LOGOUT_SUCCESS, token };
}

export function logoutFailure() {
  return { type: LOGOUT_FAILURE };
}
