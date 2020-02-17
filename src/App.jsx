import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import './App.css';
import { Provider } from 'react-redux';
import store from './data/store';

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
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </MuiThemeProvider>
);

export default withStyles(styles)(App);
