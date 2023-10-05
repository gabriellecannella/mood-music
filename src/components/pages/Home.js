import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
//import MoodWheel from "./MoodWheel";
import Footer from "../Footer";
import MoodWheel from "./MoodWheel";
function Home(mood) {
  return (
    <>
      <HeroSection />
      <MoodWheel mood={mood}/>
      <Footer />
    </>
  );
}

export default Home;
