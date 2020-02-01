import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DashboardComponent from './dashboard/Dashboard';
import Accounts from './account/Account';
import Transactions from './transactions/Transactions';
import Users from './users/Users';
import Settings from './settings/Settings';
import Categories from './categories/Categories';

export default function Main(props) {
  const { classes } = props;
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Route exact path="/" component={DashboardComponent} />
      <Route path="/accounts" component={Accounts} />
      <Route path="/transactions" component={Transactions} />
      <Route path="/users" component={Users} />
      <Route path="/categories" component={Categories} />
      <Route path="/settings" component={Settings} />
    </main>
  );
}

Main.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};
