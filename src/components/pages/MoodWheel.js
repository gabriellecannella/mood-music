import "../../App.css";
import React, { useEffect } from "react";
import { useState } from "react";
//import Navbar from "./components/Navbar";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Slider from "./components/Slider";
import BasicTextFields from "../BasicTextFields";
import DenseTable from "../DenseTable.tsx";
//import Slider from "@mui/material/Slider";
import axios from "axios";

export default function MoodWheel({mood}) {
  const [rows, setRows] = useState([]);
  const [genre, setGenre] = useState([]);


  useEffect( () => {
    console.log(mood.mood.label)
        axios
          .get(`http://127.0.0.1:5000/songs?arg1=${mood.mood.label}`)
          .then((response) => {
            const data = response.data;
            try{
              setGenre("Suggesting: "+ data[0].mood + " music")
              setRows(data);
            }
            catch{
              
            }
          });
  }, [mood]);

  return (
    <>
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact></Route>
        </Routes>
      </Router>
      <Slider /> */}
      <BasicTextFields setRows={ setRows } mood= {mood} genre={genre}/>
      <DenseTable rows={ rows } />
    </>
  );
}
//export default MoodWheel;