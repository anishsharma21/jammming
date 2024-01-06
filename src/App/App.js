import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../Spotify/Spotify';

function App() {

  Spotify.getAccessToken();

  const [searchResults, setSearchResults] = useState([]);

  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([
    // Add more tracks as needed
  ]);

  const [playlistURIs, setPlaylistURIs] = useState([]);

  const search = term => {
    console.log(`Searching Spotify with term: ${term}`); // Log the search term
    Spotify.search(term).then(searchResults => {
      console.log('Search results:', searchResults); // Log the search results
      setSearchResults(searchResults);
    });
  };

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
    const trackUris = playlistTracks.map(track => track.uri);
  
    Spotify.getUser().then(userId => {
      return Spotify.createPlaylist(userId, playlistName).then(playlistId => {
        return Spotify.addTracksToPlaylist(userId, playlistId, trackUris);
      });
    }).then(() => {
      console.log('Playlist saved to Spotify');
      // Reset the states
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
    });
  };

  return (
    <div className="App">
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <SearchBar onSearch={search} />
      <div className="SearchResultsContainer">
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onSave={savePlaylist} />
      </div>
    </div>
  );
}

export default App;