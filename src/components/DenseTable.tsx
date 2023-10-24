import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';

export default function StyledTable({ rows, accessToken }) {
  const [songData, setSongData] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    // Fetch album art and song details for each song using the Spotify Web API
    const fetchSongDetails = async () => {
      const songDetails = await Promise.all(
        rows.map(async (row) => {
          try {
            const response = await fetch(`https://api.spotify.com/v1/tracks/${row.id}`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
            });

            if (response.ok) {
              const data = await response.json();
              if (data.album && data.album.images && data.album.images.length > 0) {
                return {
                  ...row,
                  albumImageUrl: data.album.images[1].url, // Larger image (adjust index as needed)
                  songName: data.name,
                  artist: data.artists[0].name, // Assuming the first artist is the main artist
                };
              }
            }
          } catch (error) {
            console.error('Error fetching song details:', error);
          }

          return row;
        })
      );

      setSongData(songDetails);
    };

    if (accessToken) {
      fetchSongDetails();
    }
  }, [accessToken, rows]);

  const scrollLeft = () => {
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      const newScrollX = scrollX - 300; // Adjust the scroll distance as needed
      setScrollX(newScrollX);
      scrollContainer.scrollLeft = newScrollX;
    }
  };

  const scrollRight = () => {
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      const newScrollX = scrollX + 300; // Adjust the scroll distance as needed
      setScrollX(newScrollX);
      scrollContainer.scrollLeft = newScrollX;
    }
  };

  const buttonStyle = {
    background: 'white',
    border: '2px solid #4ac776',
    borderRadius: '50%',
    width: '50px', // Adjust the button size
    height: '50px', // Adjust the button size
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    color: '#4ac776',
    cursor: 'pointer',
  };
  if (accessToken) {
    return (
      <div style={{ background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center' }}>
        <button onClick={scrollLeft} style={buttonStyle}>
          {"<"}
        </button>
        <div
        style={{
          overflowX: 'scroll',
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          width: '100vw',
        }}
          id="scroll-container"
          onScroll={(e) => setScrollX(e.target.scrollLeft)}
        >
          {songData.map((row) => (
            <div
              key={row.name}
              style={{
                width: '300px', // Adjust the width as needed
                marginRight: '20px', // Adjust the margin as needed
              }}
            >
              <img
                src={row.albumImageUrl}
                alt="Album Art"
                style={{ width: '300px', height: '300px' }}
              />
              <div style={{color:'white',fontSize: '1.5rem', maxWidth: '300px' }}> {/* Maximum width for song name */}
                {row.songName}
              </div>
              <div style={{color:'white',fontSize: '1.5rem', maxWidth: '300px' }}> {/* Maximum width for artist */}
                {row.artist}
              </div>
              <a href={`https://open.spotify.com/track/${row.id}`} target="_blank" rel="noreferrer">
                <button style={{ background: 'none', border: '0px solid #4ac776', cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                        <path fill="#4ac776" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.30.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z" />
                </svg>
                </button>
              </a>
            </div>
          ))}
        </div>
        <button onClick={scrollRight} style={buttonStyle}>
          {">"}
        </button>
      </div>
    );
  }
}
