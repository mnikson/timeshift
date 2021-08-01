/**
 * @file location
 * @description Location actions
 */

// Constants
export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_LOCATIONS_FAILED = 'GET_LOCATIONS_FAILED';
export const GET_LOCATIONS_FINISHED = 'GET_LOCATIONS_FINISHED';
export const OPEN_LOCATION = 'OPEN_LOCATION';

/**
 * Get locations action
 * @returns {Object} - Action
 */
export function getLocationsAction() {
  return {
    type: GET_LOCATIONS
  };
}

/**
 * Get locations failed
 * @returns {Object} - Action
 */
export function getLocationsFailed(error) {
  return {
    type: GET_LOCATIONS_FAILED,
    error
  };
}

/**
 * Get locations finished
 * @param {Object} - Payload
 * @returns {Object} - Action
 */
export function getLocationsFinished(payload = {}) {
  return {
    type: GET_LOCATIONS_FINISHED,
    payload
  };
}

/**
 * Open location action
 * @param {Object} payload - Payload
 * @returns {Object} - Action
 */
export function openLocationAction(payload = {}) {
  return {
    type: OPEN_LOCATION,
    payload
  };
}
