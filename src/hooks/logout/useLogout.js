import { useDispatch } from 'react-redux';
import { logoutRequest, logoutSuccess, logoutFailure } from '../../data/actions/logoutActions';
import logout from '../../data/services/logout/logout';

export default function useLogout() {
  const dispatch = useDispatch();
  const logoutUser = async (data) => {
    dispatch(logoutRequest());
    const response = await logout(data);
    if (response.ok) {
      dispatch(logoutSuccess());
    } else {
      dispatch(logoutFailure());
    }
    localStorage.removeItem(process.env.REACT_APP_JWT_TOKEN);
    window.location.href = '/';
  };
  return logoutUser;
}
