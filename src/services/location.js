/**
 * @description Location services
 * @file location
 */

// Utils
import { makeRequest } from '../utils/fetch-util';
import { apiUrl } from '../config';

/**
 * Check company username
 * @param {String} username - Username
 */
export async function fetchLocations() {
  const locations = await makeRequest(apiUrl);

  return locations;
}
