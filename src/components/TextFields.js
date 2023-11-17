import React from "react";
import "./TextFields.css";

export default function TextFields({ mood, genre }) {
  mood = mood.toLowerCase();
  if (mood != "" && genre != "") {
    return (
      <div className="text-fields-container">
        {genre ? (
          <>
            <h2 className="centered-text">Mood: {mood}</h2>
            <h1 className="centered-text">Suggesting: {genre} music</h1>
          </>
        ) : null}
      </div>
    );
  }
  else{
    return (
      <div className="text-fields-container">
        <h2 className="centered-text">How are you feeling?</h2>
      </div>
    );
  }
}
