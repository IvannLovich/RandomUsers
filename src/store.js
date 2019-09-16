import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const defaultStore = {};
const enhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : def => def
);

const browserHistory = createBrowserHistory();

const store = createStore(rootReducer, defaultStore, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
