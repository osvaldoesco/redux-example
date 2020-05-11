import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';

import Routes from './Routes';
import appReducer from './reducers/index';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import rootSaga from './sagas';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagasMiddleware = createSagaMiddleware();
const middleware =
  process.env.NODE_ENV !== 'production'
    ? composeEnhancer(applyMiddleware(sagasMiddleware))
    : applyMiddleware(sagasMiddleware);

const appStore = createStore(appReducer, middleware);

sagasMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={appStore}>
    <Routes />
  </Provider> 
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
