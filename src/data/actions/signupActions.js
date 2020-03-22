export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export function signupRequest() {
  return { type: SIGNUP_REQUEST };
}

export function signupSuccess() {
  return { type: SIGNUP_SUCCESS };
}

export function signupFailure() {
  return { type: SIGNUP_FAILURE };
}
