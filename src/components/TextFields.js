import React, { useState } from "react";

export default function TextFields({ setRows,  mood, genre }) {
  return (
    <div>
      <h2>{mood.mood.label}</h2>
      <h1>{genre}</h1>
    </div>
  );
}
