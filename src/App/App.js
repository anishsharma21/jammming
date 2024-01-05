import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../Spotify/Spotify';

function App() {

  Spotify.getAccessToken();

  const [searchResults, setSearchResults] = useState([
    {id: '1', name: 'Track 1', artist: 'Artist 1', album: 'Album 1'},
    {id: '2', name: 'Track 2', artist: 'Artist 2', album: 'Album 2'},
    {id: '3', name: 'Track 3', artist: 'Artist 3', album: 'Album 3'},
    {id: '4', name: 'Track 4', artist: 'Artist 4', album: 'Album 4'}
  ]);

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    // Add more tracks as needed
  ]);

  const [playlistURIs, setPlaylistURIs] = useState([]);

  const addTrack = (track) => {
    if (!playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      setPlaylistTracks(prevTracks => [...prevTracks, track]);
      setPlaylistURIs(prevURIs => [...prevURIs, track.uri]); // assuming track.uri exists
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(prevTracks => prevTracks.filter(savedTrack => savedTrack.id !== track.id));
    setPlaylistURIs(prevURIs => prevURIs.filter(uri => uri !== track.uri)); // assuming track.uri exists
  };

  const savePlaylist = () => {
    console.log('Saving playlist');
    console.log('Name:', playlistName);
    console.log('URIs:', playlistURIs);
  
    // Reset the states
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
    setPlaylistURIs([]);
  };

  return (
    <div className="App">
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <SearchBar />
      <div className="SearchResultsContainer">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onSave={savePlaylist} />
      </div>
    </div>
  );
}

export default App;