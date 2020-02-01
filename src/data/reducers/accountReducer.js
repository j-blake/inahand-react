import {
  FETCH_ACCOUNTS_REQUEST,
  FETCH_ACCOUNTS_SUCCESS,
  SELECT_ACCOUNT,
  INVALIDATE_ACCOUNTS,
  ADD_NEW_ACCOUNT_REQUEST,
  ADD_NEW_ACCOUNT_SUCCESS,
  OPEN_ADD_ACCOUNT_MODAL,
  CLOSE_ADD_ACCOUNT_MODAL,
} from '../actions/accountActions';

export default function accounts(state = {
  isFetching: false,
  accounts: [],
  receivedAt: null,
  isInvalidated: false,
  isAddAccountModalOpen: false,
}, action) {
  switch (action.type) {
    case FETCH_ACCOUNTS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case FETCH_ACCOUNTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isInvalidated: false,
        accounts: action.accounts,
        receivedAt: action.receivedAt,
      });
    case SELECT_ACCOUNT:
      return state;
    case INVALIDATE_ACCOUNTS:
      return Object.assign({}, state, {
        isInvalidated: true,
      });
    case OPEN_ADD_ACCOUNT_MODAL:
      return Object.assign({}, state, {
        isAddAccountModalOpen: true,
      });
    case CLOSE_ADD_ACCOUNT_MODAL:
      return Object.assign({}, state, {
        isAddAccountModalOpen: false,
      });
    case ADD_NEW_ACCOUNT_REQUEST:
      return Object.assign({}, state, {
        // todo need a state here?
      });
    case ADD_NEW_ACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        isAddAccountModalOpen: false,
        accounts: [...state.accounts, action.account],
      });
    default:
      return state;
  }
}
