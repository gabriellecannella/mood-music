import "../../App.css";
import React from "react";
import { useState } from "react";
//import Navbar from "./components/Navbar";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Slider from "./components/Slider";
import BasicTextFields from "../BasicTextFields";
// import DenseTable from "../DenseTable.tsx";
import StickyHeadTable from "../StickyHeadTable.tsx";
import Grid from '@mui/material/Grid'
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
        <Grid
  container>
          <Grid BasicTextFields   direction="column"
  justifyContent="center"
  alignItems="center" xs = {4}>
          <BasicTextFields  setRows={ setRows } />
          </Grid>
          <Grid StickyHeadTable xs={8}>
          <StickyHeadTable  rows={ rows } />
          </Grid>
          </Grid>

    </>
  );
}
//export default MoodWheel;