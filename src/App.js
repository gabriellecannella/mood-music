import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Upload from "./components/pages/Upload";
import Camera from "./components/pages/Camera";
import MoodWheel from "./components/pages/MoodWheel";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
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
