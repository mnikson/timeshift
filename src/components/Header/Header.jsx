/**
 * @description Header component
 * @file Header
 */

// Libs
import React from 'react';
import PropTypes from 'prop-types';

// Components
import {
  Layout
} from 'antd';

// Styles
import styles from './Header.less';

// Constants
const {
  Header
} = Layout;

/**
 * Header component
 * @param {String} subtitle - Subtitle
 * @param {String} title - Title
 * @returns
 */
function HeaderComponent({
  subtitle,
  title
}) {
  return (
    <Header className={ styles.header }>
      <div className={ styles['header-title'] }>{ title }</div>
      <div className={ styles['header-subtitle'] }>{ subtitle }</div>
    </Header>
  );
}

HeaderComponent.propTypes = {
  /**
   * Subtitle
   */
  subtitle: PropTypes.string,
  /**
   * Title
   */
  title: PropTypes.string.isRequired
};

export default HeaderComponent;
