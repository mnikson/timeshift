/**
 * @jest-environment jsdom
 */

// Libs
import _ from 'lodash';

// Reducers
import { getLocationsAction, getLocationsFailed, getLocationsFinished, openLocationAction } from '../../src/actions';
import reducer from '../../src/reducers';
import { data } from '../__mock__/locationsData';

describe('locations reducer tests', () => {
  it('should handle GET_LOCATIONS', () => {
    const action = getLocationsAction();

    expect(reducer({}, action)).toEqual({
      locations: {
        list: [],
        loading: true,
        details: {}
      }
    });
  });

  it('should handle GET_LOCATIONS_FAILED', () => {
    const action = getLocationsFailed();

    expect(reducer({}, action)).toEqual({
      locations: {
        list: [],
        loading: false,
        details: {}
      }
    });
  });

  it('should handle GET_LOCATIONS_FINISHED', () => {
    const action = getLocationsFinished({
      data
    });

    expect(reducer({}, action)).toEqual({
      locations: {
        list: _.map(data, item => ({
          ...item,
          views: 0
        })),
        loading: false,
        details: {}
      }
    });
  });

  it('should handle OPEN_LOCATION', () => {
    const location = data[0];
    const action = openLocationAction({
      id: location.id
    });
    const list = _.map(data, item => {
      return {
        ...item,
        views: 0
      };
    });

    expect(reducer({
      locations: {
        list
      }
    }, action)).toEqual({
      locations: {
        list,
        details: {
          ...location,
          views: 1
        }
      }
    });
  });
});
