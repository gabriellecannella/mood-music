import React, { useState } from "react";
import "./TextFields.css";

export default function TextFields({ setRows,  mood, genre }) {
  if(genre != ""){
  return (
    <div>
      <h2 className="centered-text" >
        Your mood is: {mood.mood.label}
        </h2>
      <h1 className="centered-text" >
      Suggesting: {genre} music
      </h1>
    </div>
  );
  }
  else{
    return(<></>);
  }
}
