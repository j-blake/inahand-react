import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './components/AppBar';
import MenuDrawer from './components/MenuDrawer';
import Main from './components/Main';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
}));

export default function App() {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        handleDrawerOpen={() => setIsDrawerOpen(true)}
        open={isDrawerOpen}
      />
      <MenuDrawer
        handleDrawerClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
      />
      <Main />
    </div>
  );
}
