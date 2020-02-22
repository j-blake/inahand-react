export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export function loginSuccess(response) {
  return { type: LOGIN_SUCCESS, token: response.token };
}

export function loginFailure() {
  return { type: LOGIN_FAILURE };
}

export function loginRequest(data) {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    const { email, password } = data;
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ email, password }),
    });
    if (response.ok) {
      return dispatch(loginSuccess(await response.json()));
    }
    return dispatch(loginFailure());
  };
}
