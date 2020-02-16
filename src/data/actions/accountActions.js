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

export function invalidateAccounts() {
  return {
    type: INVALIDATE_ACCOUNTS,
  };
}

function shouldFetchAccounts(state) {
  const { isFetching, isInvalidated, accounts: { length: accountLength } } = state.account;
  return !(accountLength > 0 || isFetching) || isInvalidated;
}

function doFetchAccounts() {
  return async (dispatch) => {
    dispatch(requestAccounts());
    try {
      const data = await fetch('/api/accounts');
      const json = await data.json();
      return dispatch(receiveAccounts(json));
    } catch (error) {
      return console.log('An error occurred.', error);
    }
  };
}

export function fetchAccounts() {
  return (dispatch, getState) => {
    if (shouldFetchAccounts(getState())) {
      return dispatch(doFetchAccounts());
    }
    return Promise.resolve();
  };
}

export function refreshAccounts() {
  return (dispatch) => {
    dispatch(invalidateAccounts());
    return dispatch(fetchAccounts());
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

function requestAddNewAccount(data) {
  return {
    type: ADD_NEW_ACCOUNT_REQUEST,
    data,
  };
}

function receiveAddNewAccount(json) {
  return {
    type: ADD_NEW_ACCOUNT_SUCCESS,
    account: json.account,
  };
}

export function addNewAccount(data) {
  return (dispatch) => {
    dispatch(requestAddNewAccount(data));
    return fetch('/api/account', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
      .then(
        (response) => response.json(),
        (error) => console.log('An error occurred.', error),
      )
      .then((json) => dispatch(receiveAddNewAccount(json)));
  };
}
