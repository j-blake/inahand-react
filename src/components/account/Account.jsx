import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../data/actions/accountActions';
import AccountService from './AccountService';
import AccountView from './AccountView';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount = () => AccountService.fetchAccounts()

  render = () => <AccountView {...this.props} />
}

function mapStateToProps(state) {
  const { account: { accounts, receivedAt, isAddAccountModalOpen: isModalOpen } } = state;
  const date = new Date(receivedAt);
  const dateString = date.toLocaleTimeString();
  return { accounts, receivedAt: dateString, isModalOpen };
}

function mapDispatchToProps(dispatch) {
  return {
    refreshAccounts: () => AccountService.refreshAccounts(),
    onClickFab: () => dispatch(actions.openAddAccountModal()),
    onClose: () => dispatch(actions.closeAddAccountModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
