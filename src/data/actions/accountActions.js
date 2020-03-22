export const FETCH_ACCOUNTS_REQUEST = 'FETCH_ACCOUNTS_REQUEST';
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS';
export const FETCH_ACCOUNTS_FAILURE = 'FETCH_ACCOUNTS_FAILURE';
export const INVALIDATE_ACCOUNTS = 'INVALIDATE_ACCOUNTS';
export const ADD_NEW_ACCOUNT_REQUEST = 'ADD_NEW_ACCOUNT_REQUEST';
export const ADD_NEW_ACCOUNT_SUCCESS = 'ADD_NEW_ACCOUNT_SUCCESS';
export const ADD_NEW_ACCOUNT_FAILURE = 'ADD_NEW_ACCOUNT_FAILURE';
export const OPEN_ADD_ACCOUNT_MODAL = 'OPEN_ADD_ACCOUNT_MODAL';
export const CLOSE_ADD_ACCOUNT_MODAL = 'CLOSE_ADD_ACCOUNT_MODAL';
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';

export function selectAccount(account) {
  return {
    type: SELECT_ACCOUNT,
    account,
  };
}

export function requestAccounts() {
  return {
    type: FETCH_ACCOUNTS_REQUEST,
  };
}

export function receiveAccounts(accounts) {
  return {
    type: FETCH_ACCOUNTS_SUCCESS,
    accounts: accounts.accounts,
    receivedAt: Date.now(),
  };
}

export function accountsFailed() {
  return {
    type: FETCH_ACCOUNTS_FAILURE,
  };
}

export function invalidateAccounts() {
  return {
    type: INVALIDATE_ACCOUNTS,
  };
}

export function openAddAccountModal() {
  return {
    type: OPEN_ADD_ACCOUNT_MODAL,
  };
}

export function closeAddAccountModal() {
  return {
    type: CLOSE_ADD_ACCOUNT_MODAL,
  };
}

export function requestAddNewAccount(data) {
  return {
    type: ADD_NEW_ACCOUNT_REQUEST,
    data,
  };
}

export function receiveAddNewAccount(json) {
  return {
    type: ADD_NEW_ACCOUNT_SUCCESS,
    account: json.account,
  };
}
