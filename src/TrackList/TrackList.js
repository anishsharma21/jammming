import React from 'react';
import Track from '../Track/Track';
import styles from './TrackList.module.css'; // Import the CSS module

function TrackList({ tracks = [], onAdd, isRemoval, isInPlaylist }) {
  return (
    <div className={styles.TrackList}>
      {tracks.map(track => 
        <Track 
          key={track.id} 
          track={track} 
          onAdd={onAdd} 
          isRemoval={isRemoval} 
          isInPlaylist={isInPlaylist} 
        />
      )}
    </div>
  );
}

export default TrackList;