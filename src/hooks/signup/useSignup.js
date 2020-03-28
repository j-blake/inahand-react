import { useDispatch } from 'react-redux';
import { signupRequest, signupSuccess, signupFailure } from '../../data/actions/signupActions';
import signup from '../../data/services/signup/signup';

export default function useSignup() {
  const dispatch = useDispatch();
  const createUser = async (data) => {
    dispatch(signupRequest());
    const response = await signup(data);
    if (response.ok) {
      dispatch(signupSuccess());
      return { isSignedUp: true, responseErrors: {} };
    }
    dispatch(signupFailure());
    const json = await response.json();
    return { isSignedUp: false, responseErrors: json.errors || {} };
  };
  return createUser;
}
