import { useDispatch } from 'react-redux';
import { requestAddNewAccount, receiveAddNewAccount, accountsFailed } from '../../data/actions/accountActions';
import addAccount from '../../data/services/account/addAccount';

export default function useAccountCreate() {
  const dispatch = useDispatch();
  return async (data) => {
    dispatch(requestAddNewAccount(data));
    try {
      const response = await addAccount(data);
      return dispatch(receiveAddNewAccount(response.data));
    } catch (error) {
      return dispatch(accountsFailed());
    }
  };
}
