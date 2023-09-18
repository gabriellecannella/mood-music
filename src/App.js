import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
//import Slider from "@mui/material/Slider";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact></Route>
        </Routes>
      </Router>
      <Slider />
    </>
  );
}

export default App;
