import { useDispatch } from 'react-redux';
import { logoutRequest, logoutSuccess, logoutFailure } from '../../data/actions/authenticationActions';
import logout from '../../data/services/authentication/logout';

export default function useLogout() {
  const dispatch = useDispatch();
  const logoutUser = async (data) => {
    dispatch(logoutRequest());
    try {
      await logout(data);
      dispatch(logoutSuccess());
    } catch (e) {
      dispatch(logoutFailure());
    }
    window.location.href = '/';
  };
  return logoutUser;
}
