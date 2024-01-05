import React from 'react';
import styles from './Track.module.css';

function Track({ isInPlaylist }) {
  return (
    <div className={styles.TrackContainer}>
      <div className={styles.TrackDetails}>
        <h3 className={styles.TrackName}>Track Name</h3>
        <p className={styles.TrackInfo}>Track Artist | Track Album</p>
      </div>
      <button className={styles.TrackButton}>
        {isInPlaylist ? '-' : '+'}
      </button>
    </div>
  );
}

export default Track;