import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DashboardComponent from './components/dashboard/Dashboard';
import Accounts from './scenes/account/Account';
import Transactions from './components/transactions/Transactions';
import Users from './components/users/Users';
import Settings from './components/settings/Settings';
import Categories from './scenes/category/Category';
import Login from './scenes/login/Login';
import Signup from './scenes/signup/Signup';

export default function Main(props) {
  const { classes } = props;
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated) !== false;
  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={isAuthenticated ? DashboardComponent : Login} />
      <Route path="/accounts" component={isAuthenticated ? Accounts : Login} />
      <Route path="/transactions" component={isAuthenticated ? Transactions : Login} />
      <Route path="/users" component={isAuthenticated ? Users : Login} />
      <Route path="/categories" component={isAuthenticated ? Categories : Login} />
      <Route path="/settings" component={isAuthenticated ? Settings : Login} />
      <Route path="/sign-up" component={Signup} />
    </main>
  );
}

Main.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
};
