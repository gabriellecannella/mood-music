import "./App.css";
import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Upload from "./components/pages/Upload";
import Camera from "./components/pages/Camera";
import MoodWheel from "./components/MoodWheel";

function App() {
  const [mood, setMood] = useState("");
  return (
    <>
      <Router>
        <Navbar setMood= {setMood}/>
        <Routes>
          <Route path="/" exact element={<Home mood = {mood} setMood = {setMood}></Home>}></Route>
          <Route path="/camera" exact element={<Camera></Camera>}></Route>
          <Route path="/upload" exact element={<Upload></Upload>}></Route>
          <Route
            path="/mood-wheel"
            exact
            element={<MoodWheel></MoodWheel>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
