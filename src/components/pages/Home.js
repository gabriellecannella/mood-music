import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
//import MoodWheel from "./MoodWheel";
import Footer from "../Footer";
import MoodWheel from "./MoodWheel";
import FileUpload from "../FIleUpload";

// import { FileUpload } from "@mui/icons-material";
function Home({mood, setMood}) {
  return (
    <>
      <FileUpload />
      <HeroSection setMood = {setMood}/>
      <MoodWheel mood={mood}/>
      <Footer />
    </>
  );
}

export default Home;
