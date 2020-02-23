import { useDispatch } from 'react-redux';
import { requestAddNewAccount, receiveAddNewAccount, accountsFailed } from '../../data/actions/accountActions';
import addAccount from '../../data/services/account/addAccount';

const handleFailedResponse = (dispatch) => dispatch(accountsFailed());

export default function useAccountCreate() {
  const dispatch = useDispatch();
  return async (data) => {
    dispatch(requestAddNewAccount(data));
    try {
      const response = await addAccount(data);
      if (response.ok) {
        const json = await response.json();
        return dispatch(receiveAddNewAccount(json));
      }
      return (handleFailedResponse(dispatch));
    } catch (error) {
      return dispatch(accountsFailed());
    }
  };
}
