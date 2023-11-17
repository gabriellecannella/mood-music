import React, { useEffect, useState } from 'react';
import "../../App.css";
import Footer from "../Footer";
import MoodWheelComp from "../MoodWheelComp.js";
import FileUpload from "../FIleUpload";
import Navbar from '../Navbar';
import SongsList from '../SongsList';
import "../HeroSection.css";

// import { FileUpload } from "@mui/icons-material";
function Home() {
  const [mood, setMood] = useState("");

  useEffect(() => {
  }, []);
  return (
    <>
      <video src="/videos/background.mp4" autoPlay loop muted className="dimmed-video" />
      <Navbar setMood={setMood} />
      <FileUpload />
      <div className="image-container">
        <MoodWheelComp setMood={setMood} />
      </div>
      <SongsList mood={mood} />
      <Footer />
    </>
  );
}

export default Home;
