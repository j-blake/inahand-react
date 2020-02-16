import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../data/actions/accountActions';

export default function useAccounts() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchAccounts() {
      dispatch(actions.fetchAccounts());
    }
    fetchAccounts();
  });
  return useSelector((state) => state.account.accounts);
}
