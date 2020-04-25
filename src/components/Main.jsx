import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import DashboardComponent from '../scenes/dashboard/Dashboard';
import Accounts from '../scenes/account/Account';
import Transactions from '../scenes/transactions/Transactions';
import Users from '../scenes/users/Users';
import Settings from '../scenes/settings/Settings';
import Categories from '../scenes/category/Category';
import Login from '../scenes/login/Login';
import Signup from '../scenes/signup/Signup';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: '100vh',
    overflow: 'auto',
  },
}));

export default function Main() {
  const classes = useStyles();
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated) !== false;
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
