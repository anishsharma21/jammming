import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  return (
    <div className="App">
      <h1>Spotify Playlist App</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
    </div>
  );
}

export default App;