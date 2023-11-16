import React, { useState, useEffect, useCallback } from "react";
import "../../App.css";
import "../HeroSection.css";
import CustomPieChart from "../PieChart";
import SongsList from "../SongsList.js";

function MoodWheel() {
  const [mood, setMood] = useState("");
  return (
    <div className="">
      <video src="/videos/background.mp4" autoPlay loop muted className="dimmed-video" />
      <div className="image-container">
        <CustomPieChart setMood={setMood}/>
      </div>
      <div>
        <SongsList mood={mood}/>
      </div>
    </div>
  );
}

export default MoodWheel;