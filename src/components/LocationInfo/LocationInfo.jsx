/**
 * @file LocationInfo
 * @description Location info
 */

// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Utils
import { formatDate } from '../../utils/format-util';

// Styles
import styles from './LocationInfo.less';

/**
 * LocationInfo component
 * @param {String} title - Location itle
 * @returns
 */
export default function LocationInfo({
  id,
  date,
  description,
  name,
  userCount = 0,
  views = 0
}) {
  return (
    <div className={ styles['location-info'] }>
      { name && (
        <h2 data-testid={ `location-name-${id}` } className={ styles.name }>
          { name }
        </h2>
      ) }
      <div className={ styles.users }>{ userCount } Users</div>
      <div className={ styles.date }>{ formatDate(date) }</div>
      <div
        className={ styles.views }
        data-testid={ `location-views-${id}` }>
        { `${views} Views` }
      </div>
      { description && (
        <div className={ styles.description }>
          <div className={ styles['description-label'] }>
            Description
          </div>
          <p className={ styles.text }>{ description }</p>
        </div>
      ) }
    </div>
  );
}


LocationInfo.propTypes = {
  /**
   * Date
   */
  date: PropTypes.string,
  /**
   * Description
   */
  description: PropTypes.string,
  /**
   * Location id
   */
  id: PropTypes.string,
  /**
   * Name
   */
  name: PropTypes.string,
  /**
   * User content
   */
  userCount: PropTypes.number,
  /**
   * Views
   */
  views: PropTypes.number
};
