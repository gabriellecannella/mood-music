import React, { useEffect, useState } from 'react';
import "../../App.css";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import MoodWheel from "./MoodWheel";
import FileUpload from "../FIleUpload";

// import { FileUpload } from "@mui/icons-material";
function Home({mood, setMood}) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const token = params.get('access_token');
    if (token) {
      setAccessToken(token);
    }
  }, []);
  return (
    <>
      <FileUpload />
      <HeroSection setMood = {setMood}/>
      <MoodWheel mood={mood} accessToken={accessToken}/>
      <Footer />
    </>
  );
}

export default Home;
