import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./CameraFeed.css";
import { Button_Cam } from "./Button_Cam";

function CameraFeed() {
  return (
    <div className="camera-container">
      <h1>Take a picture</h1>
      <p>To scan your mood</p>
      <div className="camera-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          //link to mood wheel selection
        >
          Take a Picture
        </Button>
      </div>
    </div>
  );
}

export default CameraFeed;
