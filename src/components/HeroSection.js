import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Button_Cam } from "./Button_Cam";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/design_A.mp4" autoPlay loop muted />
      <p>Place working Music Wheel below...</p>
      <div className="image-container">
        <img
          src="/images/mood.jpeg"
          alt="Description of the img"
          style={{ width: "50%", height: "auto" }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
