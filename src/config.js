require('dotenv').config();

const apiUrl = process.env.REACT_APP_API_SERVER_URL || 'http://localhost:4000';

module.exports = {
  /**
   * Root DOM element
   */
  rootElement: 'root',

  /**
   * Application name
   */
  applicationName: process.env.REACT_APP_APPLICATION_NAME || 'Timeshift',
  /**
   * API url
   */
  apiUrl
};
