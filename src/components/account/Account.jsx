import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../data/actions/accountActions';
import AccountService from './AccountService';
import AccountView from './AccountView';

export default function Account() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      await AccountService.refreshAccounts();
    }
    fetchData();
  }, []);
  const receivedAt = new Date(useSelector((state) => state.account.receivedAt))
    .toLocaleTimeString();
  return (
    <AccountView
      accounts={useSelector((state) => state.account.accounts)}
      receivedAt={receivedAt}
      isModalOpen={useSelector((state) => state.account.isAddAccountModalOpen)}
      refreshAccounts={() => AccountService.refreshAccounts()}
      onClickFab={() => dispatch(actions.openAddAccountModal())}
      onClose={() => dispatch(actions.closeAddAccountModal())}
    />
  );
}
