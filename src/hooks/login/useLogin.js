import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../../data/actions/loginActions';
import login from '../../data/services/login/login';

export default function useLogin() {
  const dispatch = useDispatch();
  const loginUser = async (data) => {
    dispatch(loginRequest());
    const response = await login(data);
    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem(process.env.REACT_APP_JWT_TOKEN, token);
      dispatch(loginSuccess(token));
      return true;
    }
    dispatch(loginFailure());
    return false;
  };
  return loginUser;
}
