import React, { useState } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../Spotify/Spotify';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

function App() {

  Spotify.getAccessToken();

  const [searchResults, setSearchResults] = useState([]);

  const [playlistName, setPlaylistName] = useState('Playlist Name');
  const [playlistTracks, setPlaylistTracks] = useState([
    // Add more tracks as needed
  ]);

  // eslint-disable-next-line no-unused-vars
  const [playlistURIs, setPlaylistURIs] = useState([]);

  // Add this line to the existing useState declarations
  const [isLoading, setIsLoading] = useState(false);

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

  const savePlaylist = (name) => {
    setIsLoading(true); // Set loading state to true before starting the save operation
    const trackUris = playlistTracks.map(track => track.uri);
  
    Spotify.getUser().then(userId => {
      return Spotify.createPlaylist(userId, name).then(playlistId => {
        return Spotify.addTracksToPlaylist(userId, playlistId, trackUris);
      });
    }).then(() => {
      console.log('Playlist saved to Spotify');
      // Reset the states
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
      setIsLoading(false); // Set loading state back to false after the save operation is complete
    }).catch(() => {
      setIsLoading(false); // Set loading state back to false if the save operation fails
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
      {isLoading && <LoadingScreen />}
    </div>
  );
}

export default App;