import React from "react";
import "../App.css";
import { CameraButton } from "./CameraButton";
import "./CameraFeed.css";

 function CameraFeed() {
  return (
    <div className="camera-container">
      <h1>Take a picture</h1>
      <p>To scan your mood</p>
      <CameraButton />
    </div>
  );
}
export default CameraFeed;