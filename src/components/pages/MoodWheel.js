import "../../App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import TextFields from "../TextFields";
import DenseTable from "../DenseTable.tsx";
import axios from "axios";

export default function MoodWheel({mood, accessToken}) {
  const [rows, setRows] = useState([]);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    if (rows.length > 0) {
      window.scrollTo({ top: 740, behavior: "smooth" });
    }
  }, [rows]);


  useEffect( () => {
        axios
          .get(`http://127.0.0.1:5000/songs?arg1=${mood}`)
          .then((response) => {
            const data = response.data;
            try{
              setGenre(data[0].mood.toLowerCase())
              setRows(data);
            }
            catch{
              
            }
          });
  }, [mood]);

  return (
    <>
      <TextFields setRows={ setRows } mood= {mood} genre={genre} />
      <DenseTable rows={ rows } accessToken={accessToken}/>
    </>
  );
}