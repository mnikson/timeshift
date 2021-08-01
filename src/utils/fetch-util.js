/**
 * @description Fetch Utils
 * @file fetch-util
 */

// Libs
import { Message } from 'antd';

// Utils
import {
  API_METHODS
} from './constants';

/**
 * Response handler
 * @param {Object} response - API Response
 * @returns {@void} - Response
 */
export async function handleResponse(response = {}) {
  const { ok = true } = response;

  if (!ok) {
    const responseObj = await response.json();
    const {
      message
    } = responseObj;
    const error = message || response.statusText;

    throw new Error(error);
  }

  const responseObj = await response.json();

  return responseObj;
}

/**
 * Error handler
 * @throws {Object} - Error
 */
export function handleError(error) {
  // Display an error message
  const errorMessage = (error && error.message) || 'Server Error';

  Message.error(errorMessage);

  if (!error) {
    throw new Error(errorMessage);
  }

  throw error;
}


/**
 * Make API request
 * @param {String} url - API URL path
 * @param {Object} data - Body data
 * @param {Object} options - Request options
 */
export async function makeRequest(url, { data = {}, options = {} } = {}) {
  try {
    if (!url) {
      throw new Error('URL doesn\'t exist');
    }

    const {
      headers,
      method = API_METHODS.GET
    } = options;
    const requestOptions = {
      method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers
      }
    };

    if (method !== API_METHODS.GET) {
      requestOptions.body = JSON.stringify(data);
    }

    const response = await fetch(url, requestOptions);

    return handleResponse(response);
  } catch (err) {
    handleError(err);
  }
}
