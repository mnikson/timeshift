/**
 * @file Loading
 * @description Loading component
 */

// Libs
import React from 'react';
import { Spin } from 'antd';

// Styles
import styles from './Loading.less';

/**
 * Loading component
 * @returns {Function} - Component
 */
export default function Loading() {
  return (
    <div className={ styles.loader }>
      <Spin data-testid="loader" />
    </div>
  );
}
