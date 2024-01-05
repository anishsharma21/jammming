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

  return (
    <div className="App">
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <SearchBar />
      <div className="SearchResultsContainer">
        <SearchResults searchResults={searchResults} />
        <Playlist />
      </div>
    </div>
  );
}

export default App;