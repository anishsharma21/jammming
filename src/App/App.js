import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {

  const [searchResults, setSearchResults] = useState([
    {id: '1', name: 'Track 1', artist: 'Artist 1', album: 'Album 1'},
    {id: '2', name: 'Track 2', artist: 'Artist 2', album: 'Album 2'},
    // Add more tracks as needed
  ]);

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    {id: '3', name: 'Track 3', artist: 'Artist 3', album: 'Album 3'},
    {id: '4', name: 'Track 4', artist: 'Artist 4', album: 'Album 4'},
    // Add more tracks as needed
  ]);

  return (
    <div className="App">
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <SearchBar />
      <div className="SearchResultsContainer">
        <SearchResults searchResults={searchResults} />
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
      </div>
    </div>
  );
}

export default App;