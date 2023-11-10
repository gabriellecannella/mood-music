// Player.js
import React, { useEffect } from 'react';

const Player = ({ accessToken }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const player = new Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: (cb) => {
          cb(accessToken);
        },
      });

      // Error handling
      player.addListener('initialization_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('authentication_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('account_error', ({ message }) => {
        console.error(message);
      });
      player.addListener('playback_error', ({ message }) => {
        console.error(message);
      });

      // Connect to the player
      player.connect().then(success => {
        if (success) {
          console.log('The Web Playback SDK has been connected.');
        }
      });
    };
  }, [accessToken]);

  return <div id="spotify-player"></div>;
};

export default Player;
