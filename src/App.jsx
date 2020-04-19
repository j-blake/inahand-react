import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './components/AppBar';
import MenuDrawer from './components/MenuDrawer';
import Main from './components/Main';
import Login from './scenes/login/Login';
import useAuth from './hooks/auth/useAuth';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default function App() {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isAuthenticated = useAuth();
  const content = isAuthenticated ? (
    <>
      <AppBar
        handleDrawerOpen={() => setIsDrawerOpen(true)}
        open={isDrawerOpen}
      />
      <MenuDrawer
        handleDrawerClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
      />
      <Main />
    </>
  ) : <Login />;
  return (
    <div className={classes.root}>
      <CssBaseline />
      {content}
    </div>
  );
}
