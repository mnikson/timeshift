/* eslint-disable no-undef */
/**
 * @file Redux store
 * @author Nikola Miljkovic <mnikson@gmail.com>
 * @version 1.0
 * @copyright Kiterra LLC 2019
 */

import dotenv from 'dotenv';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

// Reducers
import rootReducer from '../reducers';
// Sagas
import rootSaga from '../sagas';

// Load .env
dotenv.config();

// A nice helper to tell us if we're on the server
export const isServer = !(
  typeof window !== 'undefined'
  && window.document
  && window.document.createElement
);

export default () => {
  const enhancers = [];

  // Dev tools are helpful
  if (process.env.NODE_ENV === 'development' && !isServer) {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    sagaMiddleware
  ];

  if (process.env.NODE_ENV === 'development') {
    middleware.push(createLogger({
      collapsed: true
    }));
  }
  // eslint-disable-next-line no-console

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  // Do we have preloaded state available? Great, save it.
  // const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

  // Delete it once we have it stored in a variable
  if (!isServer) {
    delete window.__PRELOADED_STATE__;
  }

  // Create the store
  // const persistedReducer = persistReducer(persistConfig, rootReducer;
  const store = createStore(
    rootReducer,
    composedEnhancers
  );

  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept([
      '../../src'
    ], () => store.replaceReducer(rootReducer));
  }

  return {
    store,
    persistor
  };
};
