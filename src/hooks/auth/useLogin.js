import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../../data/actions/authenticationActions';
import login from '../../data/services/authentication/login';

export default function useLogin() {
  const dispatch = useDispatch();
  const loginUser = async (data) => {
    dispatch(loginRequest());
    const response = await login(data);
    if (response.ok) {
      dispatch(loginSuccess());
      return true;
    }
    dispatch(loginFailure());
    return false;
  };
  return loginUser;
}
