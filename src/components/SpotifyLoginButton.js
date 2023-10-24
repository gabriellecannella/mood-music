import React from 'react';
import Button from '@mui/material/Button';

function SpotifyLoginButton() {
  const handleLogin = () => {
    // Define your Spotify client ID and scopes
    const scopes = ['user-library-read', 'user-read-playback-state', 'user-modify-playback-state'];
    const clientID = 'YOUR-CLIENT-ID';

    // Construct the Spotify authorization URL
    const authURL = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&redirect_uri=http://localhost:3000/#&scope=${scopes.join('%20')}`;

    // Redirect the user to Spotify for authorization
    window.location.href = authURL;
  }

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleLogin}
    >
      Log in with Spotify
    </Button>
  );
}

export default SpotifyLoginButton;
