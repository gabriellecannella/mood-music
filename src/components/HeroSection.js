import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import { Button_Cam } from "./Button_Cam";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/background_2.mp4" autoPlay loop muted />
      <h1>START LISTENING</h1>
      <p>Music tailored for you.</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          //link to mood wheel selection
        >
          MOOD WHEEL
        </Button>
        <Button_Cam
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("working yayay")}
        >
          FACE DETECTION
        </Button_Cam>
      </div>
    </div>
  );
}

export default HeroSection;
