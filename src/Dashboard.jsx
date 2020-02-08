import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from './AppBar';
import MenuDrawer from './MenuDrawer';
import Main from './Main';
import styles from './styles';

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          classes={classes}
          handleDrawerOpen={() => setIsDrawerOpen(true)}
          open={isDrawerOpen}
        />
        <MenuDrawer
          classes={classes}
          handleDrawerClose={() => setIsDrawerOpen(false)}
          open={isDrawerOpen}
        />
        <Main classes={classes} />
      </div>
    </BrowserRouter>
  );
}
