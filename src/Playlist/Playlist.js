import React from 'react';
import styles from './Playlist.module.css';
import TrackList from '../TrackList/TrackList';

function Playlist({ playlistName, playlistTracks }) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={playlistName}/>
      <TrackList tracks={playlistTracks} isInPlaylist={true} />
      <button className={styles['Playlist-save']}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;