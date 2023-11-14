import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { UploadFile } from "@mui/icons-material";
import { CameraButton } from './CameraButton';
import MyPopup from "./PopupModal";
import { useDropzone } from 'react-dropzone';

function Navbar({ setMood,  isModalOpen, setModalOpen}) {
  const toggleModal = () => setModalOpen(!isModalOpen);

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 960) {
        setModalOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <MyPopup showModal={isModalOpen} setModal={setModalOpen} setMood={setMood} />
      <nav className="navbar">
        <div className="navbar-container">
          <Link to = "/camera"className="nav-links" >
            <CameraButton color="white" fontSize="large" />
          </Link>
          <div className="logo-container">
            <Link to="/" className="navbar-logo">
              MOOD MUSIC
            </Link>
          </div>
          <Link to ="/upload"className="nav-links" >
            <UploadFile color="white" fontSize="large" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
