/**
 * @file sagas
 * @description Sagas main fine
 */

// Libs
import { all, fork } from 'redux-saga/effects';

// Sagas
import location from './location';

export default function* rootSaga() {
  yield all([
    location
  ].map(fork));
}
