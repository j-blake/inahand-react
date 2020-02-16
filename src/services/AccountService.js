import mockAccounts from '../scenes/account/mockData';
import store from '../data/store';
import * as actions from '../data/actions/accountActions';

export default {
  fetchAccounts: () => store.dispatch(actions.fetchAccounts()),

  fetchMockAccounts: (callback) => callback(mockAccounts),

  refreshAccounts: () => store.dispatch(actions.refreshAccounts()),

  addNewAccount: (data) => {
    const formattedPostData = JSON.stringify(this.formatAccountPostData(data));
    store.dispatch(actions.addNewAccount(formattedPostData));
  },

  formatAccountPostData: (data) => {
    const formattedAccountData = {};
    formattedAccountData.name = data.accountName;
    formattedAccountData.initialBalance = parseFloat(data.amount).toFixed(2);
    return formattedAccountData;
  },
};
