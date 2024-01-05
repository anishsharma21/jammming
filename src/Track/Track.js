import React from 'react';
import styles from './Track.module.css';

function Track({ track, isInPlaylist }) {
  return (
    <div className={styles.TrackContainer}>
      <div className={styles.TrackDetails}>
        <h3 className={styles.TrackName}>{track.name}</h3>
        <p className={styles.TrackInfo}>{track.artist} | {track.album}</p>
      </div>
      <button className={styles.TrackButton}>
        {isInPlaylist ? '-' : '+'}
      </button>
    </div>
  );
}

export default Track;