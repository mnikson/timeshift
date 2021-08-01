/**
 * @file format-util
 * @description Format utils
 */

// Libs
import moment from 'moment';

// Constants
const DATE_FORMAT = 'h:mm a (Z)';

/**
 * Format date
 * @param {String} date - Date
 * @param {String} format - Date format
 * @returns {String} - Formatted date
 */
export function formatDate(date, format = DATE_FORMAT) {
  return moment(date).format(format);
}
