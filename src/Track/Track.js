// Track.js
import React from 'react';
import styles from './Track.module.css';

function Track({ track, onAdd, onRemove, isRemoval, isInPlaylist }) {
  const addTrack = () => {
    onAdd(track);
  };

  const removeTrack = () => {
    onRemove(track);
  };

  return (
    <div className={styles.TrackContainer}>
      <div className={styles.TrackDetails}>
        <h3 className={styles.TrackName}>{track.name}</h3>
        <p className={styles.TrackInfo}>
          <span className={styles.ArtistName}>{track.artist}</span>
          <span className={styles.AlbumName}>{track.album}</span>
        </p>
      </div>
      <button className={styles.TrackButton} onClick={isInPlaylist ? removeTrack : addTrack}>
        {isInPlaylist ? '-' : '+'}
      </button>
    </div>
  );
}

export default Track;