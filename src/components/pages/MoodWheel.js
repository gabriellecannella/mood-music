import "../../App.css";
import React from "react";
import { useState } from "react";
//import Navbar from "./components/Navbar";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Slider from "./components/Slider";
import BasicTextFields from "../BasicTextFields";
import DenseTable from "../DenseTable.tsx";
//import Slider from "@mui/material/Slider";
export default function MoodWheel() {
  const [rows, setRows] = useState([]);
  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact></Route>
        </Routes>
      </Router>
      <Slider /> */}
      <BasicTextFields setRows={ setRows } />
      <DenseTable rows={ rows } />
    </>
  );
}
//export default MoodWheel;