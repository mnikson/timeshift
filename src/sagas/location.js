/**
 * @description Application sagas
 * @file location
 */

// Libs
import { message } from 'antd';
import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import {
  GET_LOCATIONS,
  getLocationsFinished,
  getLocationsFailed
} from '../actions';

// Services
import { fetchLocations } from '../services/location';

/**
 * Get locations
 */
export function* getLocationsHandler() {
  try {
    const result = yield call(fetchLocations);

    yield put(getLocationsFinished({
      data: result
    }));
  } catch (err) {
    message.error(err.message);
    yield put(getLocationsFailed(err));
  }
}

export default function* appSaga() {
  yield takeLatest(GET_LOCATIONS, getLocationsHandler);
}
