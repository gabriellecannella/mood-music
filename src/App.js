import "./App.css";
import React, {useEffect, useState } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Upload from "./components/pages/Upload";
import Camera from "./components/pages/Camera";
import MoodWheel from "./components/pages/MoodWheel";
import Footer from "./components/Footer";

// import results from "./components/results";

function App() {
  const [mood, setMood] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
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
      <Router>
        <Navbar setMood= {setMood} isModalOpen={isModalOpen} setModalOpen= {setModalOpen}/>
        <Routes>
          <Route path="/" exact element={<Home mood = {mood} setMood = {setMood} accessToken= {accessToken} setAccessToken = {setAccessToken}></Home>}></Route>
          <Route path="/camera" exact element={<Camera isModalOpen={isModalOpen} setModalOpen= {setModalOpen}></Camera>}></Route>
          <Route path="/upload" exact element={<Upload setMood = {setMood}></Upload>}></Route>
        </Routes>
        <MoodWheel mood={mood} accessToken={accessToken}/>
        <Footer />
      </Router>
    </>
  );
}

export default App;
