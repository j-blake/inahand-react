import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import './App.css';

import styles from './styles';
import Dashboard from './Dashboard';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
    type: 'dark',
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Dashboard />
  </MuiThemeProvider>
);

export default withStyles(styles)(App);
