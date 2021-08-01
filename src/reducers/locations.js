/**
 * @file location
 * @description Locations reducers
 */

// Libs
import _ from 'lodash';

import {
  GET_LOCATIONS,
  GET_LOCATIONS_FAILED,
  GET_LOCATIONS_FINISHED,
  OPEN_LOCATION
} from '../actions';

const initialState = {
  list: [],
  loading: false,
  details: {}
};

export default (state = initialState, action = {}) => {
  const { type, payload = {} } = action;
  const { data, id } = payload;

  switch (type) {
    // Get locations
    case GET_LOCATIONS:
      return {
        ...state,
        loading: true
      };

    // Get locations failed
    case GET_LOCATIONS_FAILED:
      return {
        ...state,
        loading: false
      };

    // Get locations finished
    case GET_LOCATIONS_FINISHED:
      const list = _.cloneDeep(data);

      return {
        ...state,
        loading: false,
        list: _.map(list, value => ({
          ...value,
          views: 0
        }))
      };

    // Open location
    case OPEN_LOCATION:
      const singleLocation = _.find(state.list, location => location.id === id);

      // increase views count for location
      _.forEach(state.list, item => {
        if (item.id === id) {
          item.views++;
        }
      });

      return {
        ...state,
        details: singleLocation || null
      };

    default:
      return {
        ...state
      };
  }
};
