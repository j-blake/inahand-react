import { useDispatch } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../../data/actions/authenticationActions';
import login from '../../data/services/authentication/login';

export default function useLogin() {
  const dispatch = useDispatch();
  const loginUser = async (data) => {
    dispatch(loginRequest());
    try {
      await login(data);
      dispatch(loginSuccess());
      return true;
    } catch (e) {
      dispatch(loginFailure());
      return false;
    }
  };
  return loginUser;
}
