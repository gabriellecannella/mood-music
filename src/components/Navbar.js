import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FileUpload, LibraryMusic } from "@mui/icons-material";

function Navbar() {
  useEffect(() => {
    return () => {
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo-container">
            <Link to="/" className="navbar-logo">
              MoodMusic&nbsp;
              <LibraryMusic color="white" fontSize="large" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
