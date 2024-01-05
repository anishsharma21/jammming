import React from 'react';
import styles from './Track.module.css';

function Track() {
  return (
    <div className={styles.Track}>
      <div className={styles.TrackInformation}>
        <h3>Track Name</h3>
        <p>Track Artist | Track Album</p>
      </div>
      <button className={styles.TrackAction}>+</button>
    </div>
  );
}

export default Track;