import React, { useRef } from 'react';
import styles from './Playlist.module.css';
import TrackList from '../TrackList/TrackList';

function Playlist({ playlistName, playlistTracks, onRemove, onSave }) {
  const inputRef = useRef(); // Create a ref to access the input field

  const handleSave = () => {
    onSave(inputRef.current.value); // Pass the current input value to the onSave function
  };

  return (
    <div className={styles.Playlist}>
      <input ref={inputRef} defaultValue={playlistName}/> {/* Add the ref to the input field */}
      <TrackList tracks={playlistTracks} isInPlaylist={true} onRemove={onRemove} />
      <button className={styles['Playlist-save']} onClick={handleSave}>SAVE TO SPOTIFY</button> {/* Modify the onClick handler */}
    </div>
  );
}

export default Playlist;