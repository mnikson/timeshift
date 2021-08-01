/* eslint-disable react/jsx-filename-extension */
// Libs
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';

import config from './config';

// Components
import App from './components/App';

// Globals
import createStore from './globals/store';

import reportWebVitals from './reportWebVitals';

dotenv.config();

const { store } = createStore();

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById(config.rootElement)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
