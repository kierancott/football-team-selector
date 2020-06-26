import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { Provider } from "react-redux";

import initial from "./data/initial";
import reducer from "./data/reducer";

import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
