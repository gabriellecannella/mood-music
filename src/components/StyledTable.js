import React, { useEffect, useState } from 'react';
import "./Footer.css";
import "./StyledTable.css"

export default function StyledTable({ rows }) {
  const [songData, setSongData] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const loadLocalAlbumImages = () => {
      const songDetails = rows.map((row) => {
        try {
          const localImageUrl = `/album_covers/${row.id}.jpg`;
          return { ...row, albumImageUrl: localImageUrl };
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
      const newScrollX = scrollX - 300;
      setScrollX(newScrollX);
      scrollContainer.scrollLeft = newScrollX;
    }
  };

  const scrollRight = () => {
    const scrollContainer = document.getElementById('scroll-container');
    if (scrollContainer) {
      const newScrollX = scrollX + 300;
      setScrollX(newScrollX);
      scrollContainer.scrollLeft = newScrollX;
    }
  };

  if(rows){
    return (
        <div className="list-container">
          <button onClick={scrollLeft} className="scroll-button">
            {"<"}
          </button>
          <div id="scroll-container" className="scroll-container" onScroll={(e) => setScrollX(e.target.scrollLeft)}>
            {songData.map((row) => (
              <div key={row.name} className="song-item">
                <img src={row.albumImageUrl} alt="Album Art" />
                <div className="song-title">{row.name}</div>
                <div className="song-artist">{row.artist}</div>
                <a href={`https://open.spotify.com/track/${row.id}`} target="_blank" rel="noreferrer">
                  <button className="spotify-button">
                    <i className="fa-3x fa-brands fa-spotify spotify-green-icon"></i>
                  </button>
                </a>
              </div>
            ))}
          </div>
          <button onClick={scrollRight} className="scroll-button">
            {">"}
          </button>
        </div>
      );
  }
}
