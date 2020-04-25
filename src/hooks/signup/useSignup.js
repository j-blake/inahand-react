import { useDispatch } from 'react-redux';
import { signupRequest, signupSuccess, signupFailure } from '../../data/actions/signupActions';
import signup from '../../data/services/signup/signup';

export default function useSignup() {
  const dispatch = useDispatch();
  const createUser = async (data) => {
    dispatch(signupRequest());
    try {
      await signup(data);
      dispatch(signupSuccess());
      return { isSignedUp: true, responseErrors: {} };
    } catch (e) {
      dispatch(signupFailure());
      return { isSignedUp: false, responseErrors: e.response.errors || {} };
    }
  };
  return createUser;
}
