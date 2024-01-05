import React from 'react';
import styles from './Playlist.module.css';
import TrackList from '../TrackList/TrackList';

function Playlist() {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={'New Playlist'}/>
      <TrackList isInPlaylist={true} />
      <button className={styles['Playlist-save']}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;