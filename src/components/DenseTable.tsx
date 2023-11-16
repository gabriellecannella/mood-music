import React, { useEffect, useState } from 'react';
import "./Footer.css"

export default function StyledTable({ rows }) {
  const [songData, setSongData] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    // Load locally stored album cover images
    const loadLocalAlbumImages = () => {
      const songDetails = rows.map((row) => {
        try {
          const localImageUrl = `/album_covers/${row.id}.jpg`; // Replace with the actual path
          return {
            ...row,
            albumImageUrl: localImageUrl,
          };
        } catch (error) {
          console.error('Error loading local album image:', error);
          return row;
        }
      });

      setSongData(songDetails);
    };

    loadLocalAlbumImages();
  }, [rows]);

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
            <div style={{ color: 'white', fontSize: '1.5rem', maxWidth: '300px' }}>
              {row.name}
            </div>
            <div style={{ color: 'white', fontSize: '1rem', maxWidth: '300px' }}>
              {row.artist}
            </div>
            <a href={`https://open.spotify.com/track/${row.id}`} target="_blank" rel="noreferrer">
              <button style={{ background: 'none', border: '0px solid #4ac776', cursor: 'pointer' }}>
              <i class="fa-3x fa-brands fa-spotify spotify-green-icon"></i>
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
