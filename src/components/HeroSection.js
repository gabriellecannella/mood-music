import React from "react";
import "../App.css";
import "./HeroSection.css";
import MoodWheel from "./MoodWheel";

function HeroSection({setMood}) {
  return (
    <div className="hero-container">
      <video src="/videos/Back-vid.mp4" autoPlay loop muted />
      <div className="image-container">
        <MoodWheel setMood= {setMood}/>
      </div>
    </div>
  );
}

export default HeroSection;
