import {
  getLocationsAction,
  getLocationsFailed,
  getLocationsFinished,
  GET_LOCATIONS,
  GET_LOCATIONS_FAILED,
  GET_LOCATIONS_FINISHED,
  openLocationAction,
  OPEN_LOCATION
} from '../../src/actions/location';

import { data } from '../__mock__/locationsData';

describe('locations actions tests', () => {
  it('should return getLocationsAction action', () => {
    expect(
      getLocationsAction()
    ).toEqual({
      type: GET_LOCATIONS
    });
  });

  it('should return getLocationsFailed action', () => {
    const error = new Error('Action failed');

    expect(
      getLocationsFailed(error)
    ).toEqual({
      type: GET_LOCATIONS_FAILED,
      error
    });
  });

  it('should return getLocationsFinished action', () => {
    const payload = {
      data
    };

    expect(
      getLocationsFinished(payload)
    ).toEqual({
      type: GET_LOCATIONS_FINISHED,
      payload
    });
  });

  it('should return openLocationAction action', () => {
    const payload = {
      id: 3
    };

    expect(
      openLocationAction(payload)
    ).toEqual({
      type: OPEN_LOCATION,
      payload
    });
  });
});
