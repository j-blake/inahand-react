import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../data/actions/accountActions';

export default function useAccounts() {
  const dispatch = useDispatch();
  dispatch(actions.fetchAccounts());
  return useSelector((state) => state.account.accounts);
}
