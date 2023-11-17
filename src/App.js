import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
