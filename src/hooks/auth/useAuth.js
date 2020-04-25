import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from '../../data/actions/authenticationActions';
import status from '../../data/services/authentication/status';

export default function useAuth() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function checkAuthentication() {
      dispatch(loginRequest());
      try {
        await status();
        return dispatch(loginSuccess());
      } catch (e) {
        return dispatch(loginFailure());
      }
    }
    checkAuthentication();
  }, [dispatch]);
  return useSelector((state) => state.authentication.isAuthenticated);
}
