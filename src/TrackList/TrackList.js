import React from 'react';
import Track from '../Track/Track';
import styles from './TrackList.module.css'; // Import the CSS module

function TrackList({ isInPlaylist }) {
  return (
    <div className={styles.TrackList}> {/* Use the styles in your JSX code */}
      <Track isInPlaylist={isInPlaylist} />
      <Track isInPlaylist={isInPlaylist} />
      <Track isInPlaylist={isInPlaylist} />
    </div>
  );
}

export default TrackList;