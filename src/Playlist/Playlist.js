import React from 'react';
import styles from './Playlist.module.css';
import TrackList from '../TrackList/TrackList';

function Playlist({ playlistName, playlistTracks, onRemove, onSave }) {
  return (
    <div className={styles.Playlist}>
      <input defaultValue={playlistName}/>
      <TrackList tracks={playlistTracks} isInPlaylist={true} onRemove={onRemove} />
      <button className={styles['Playlist-save']} onClick={onSave}>SAVE TO SPOTIFY</button>
    </div>
  );
}

export default Playlist;