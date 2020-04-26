import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import primary from '@material-ui/core/colors/blue';
import secondary from '@material-ui/core/colors/lightGreen';
import { Provider } from 'react-redux';
import store from './data/store';
import './index.css';
import App from './App';
import Signup from './scenes/signup/Signup';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary,
    secondary,
    type: 'dark',
  },
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/sign-up">
            <Signup />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
