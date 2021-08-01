// Libs
import {
  takeLatest
} from 'redux-saga/effects';

// Actions
import { GET_LOCATIONS } from '../../src/actions';

// Sagas
import appSaga, { getLocationsHandler } from '../../src/sagas/location';

describe('Location sagas tests', () => {
  it('Should watch GET_LOCATIONS" ', () => {
    const generator = appSaga();
    expect(generator.next().value)
      .toEqual(takeLatest(GET_LOCATIONS, getLocationsHandler));
    expect(generator.next().done).toBeTruthy();
  });
});
