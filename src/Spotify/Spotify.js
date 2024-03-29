let accessToken;

const clientId = 'decfa5e608c543d1845ac6f12b7f0f5f'; // Replace with your client id

const redirectUri = process.env.NODE_ENV === 'production' ? 'https://anishsharma21.github.io/jammming/' : 'http://localhost:3000';

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for access token match
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      // This clears the parameters, allowing us to grab a new access token when it expires
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },

  search(term) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then(response => response.json())
    .then(data => {
      if (!data.tracks) {
        return [];
      }
      return data.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));
    });
  },

  getUser() {
    const accessToken = Spotify.getAccessToken();
    return fetch('https://api.spotify.com/v1/me', {
      headers: { Authorization: `Bearer ${accessToken}` }
    }).then(response => response.json())
    .then(data => {
      return data.id; // Return the user's Spotify username
    });
  },

  createPlaylist(userId, playlistName) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ name: playlistName })
    }).then(response => response.json())
    .then(data => {
      return data.id; // Return the new playlist's ID
    });
  },

  addTracksToPlaylist(userId, playlistId, trackUris) {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ uris: trackUris })
    });
  }
};

export default Spotify;