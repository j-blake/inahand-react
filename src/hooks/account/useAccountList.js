import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestAccounts, receiveAccounts, accountsFailed } from '../../data/actions/accountActions';
import fetchAccountsData from '../../data/services/account/fetchAccounts';

export default function useAccount() {
  const dispatch = useDispatch();
  const isInvalidated = useSelector((state) => state.account.isInvalidated);
  useEffect(() => {
    async function fetchData() {
      dispatch(requestAccounts());
      try {
        const response = await fetchAccountsData();
        return dispatch(receiveAccounts(response.data));
      } catch (error) {
        return dispatch(accountsFailed());
      }
    }
    if (isInvalidated) {
      fetchData();
    }
  }, [dispatch, isInvalidated]);
  return useSelector((state) => state.account.accounts);
}
