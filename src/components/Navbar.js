import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { UploadFile } from "@mui/icons-material";
import { CameraButton } from './CameraButton';
import MyPopup from "./PopupModal";
import { useDropzone } from 'react-dropzone';

function Navbar({ setMood }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      const formData = new FormData();
      formData.append('snapshot', acceptedFiles[0]);

      const response = await fetch('http://127.0.0.1:5000/camera', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const label = await response.text();
        setMood(label);
      } else {
        console.error('Error processing snapshot on the server');
      }
    } catch (error) {
      console.error('Error sending snapshot to the server:', error);
    }
  }, [setMood]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.jpg, .jpeg, .png',
  });

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
          <Link className="nav-links" onClick={toggleModal}>
            <CameraButton color="white" fontSize="large" />
          </Link>
          <div className="logo-container">
            <Link to="/" className="navbar-logo">
              MOOD MUSIC
            </Link>
          </div>
          <Link className="nav-links" {...getRootProps()}>
            <input {...getInputProps()} />
            <UploadFile color="white" fontSize="large" />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
