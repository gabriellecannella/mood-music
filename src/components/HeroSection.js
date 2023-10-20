import React from "react";
import "../App.css";
import "./HeroSection.css";
import MoodWheel from "./MoodWheel";

function HeroSection({setMood}) {
  return (
    <div className="hero-container">
      <video src="/videos/back-vid2.mp4" autoPlay loop muted />
      <p>Place working Music Wheel below...</p>
      <div className="image-container">
        <MoodWheel setMood= {setMood}/>
      </div>
    </div>
  );
}

export default HeroSection;
