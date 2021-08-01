/**
 * @file App
 * @description Application main component
 */

// Libs
import React from 'react';

// Containers
import { LocationsContainer } from '../../containers';


// Styles
import styles from './App.less';

export default function App() {
  return (
    <div className={ styles['app-container'] }>
      <LocationsContainer />
    </div>
  );
}
