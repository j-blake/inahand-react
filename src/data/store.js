import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';
// import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

// const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(
      thunkMiddleWare,
      // loggerMiddleware
    ),
  ),
);

export default store;
