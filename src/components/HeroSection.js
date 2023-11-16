import React from "react";
import "../App.css";
import "./HeroSection.css";
import { ButtonCamera } from "./buttons/ButtonCamera";
import { ButtonWheel } from "./buttons/ButtonWheel";
import { ButtonUpload } from "./buttons/ButtonUpload";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/background.mp4" autoPlay loop muted className="dimmed-video" />
      <h1>START LISTENING</h1>
      <p>Music tailored for you.</p>
      <div className="hero-btns">
        <ButtonWheel
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          MOOD WHEEL
        </ButtonWheel>

        <ButtonCamera
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          FACE DETECTION
        </ButtonCamera>
        
        <ButtonUpload
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          PICTURE UPLOAD
        </ButtonUpload>
      </div>
    </div>
  );
}

export default HeroSection;
