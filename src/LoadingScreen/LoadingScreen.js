import React from 'react';
import styles from './LoadingScreen.module.css'; // Import the CSS file

const LoadingScreen = () => {
  return (
    <div className={styles['loading-screen']}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingScreen;