import mockAccounts from './mockData';
import store from '../../data/store';
import * as actions from '../../data/actions/accountActions';

class DashboardService {
  fetchAccounts = () => store.dispatch(actions.fetchAccounts())

  fetchMockAccounts = callback => callback(mockAccounts)

  refreshAccounts = () => store.dispatch(actions.refreshAccounts())

  addNewAccount = (data) => {
    const formattedPostData = JSON.stringify(this.formatAccountPostData(data));
    store.dispatch(actions.addNewAccount(formattedPostData));
  }

  formatAccountPostData = (data) => {
    const formattedAccountData = {};
    formattedAccountData.name = data.accountName;
    formattedAccountData.initialBalance = parseFloat(data.amount).toFixed(2);
    return formattedAccountData;
  }
}

class DashboardServiceFactory {
  static createInstance() {
    return new DashboardService();
  }
}

export default DashboardServiceFactory.createInstance();
