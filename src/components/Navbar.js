import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { UploadFile } from "@mui/icons-material";
import { CameraButton } from './CameraButton';
import MyPopup from "./PopupModal";
import { useDropzone } from 'react-dropzone';

function Navbar({setMood}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  const onDrop = useCallback( async (acceptedFiles) => {
    // Handle the accepted files here (e.g., upload to a server)
    console.log('Accepted files:', acceptedFiles[0]);
    try {
      const formData = new FormData();
      formData.append('snapshot', acceptedFiles[0]);
      const response =  fetch('http://127.0.0.1:5000/camera', {
        method: 'POST',
        body: formData,
      }).then((response) =>{ 

        if (response.ok) {
          const label = response.text().then((label) => {
            console.log({label});
            setMood({label});

          }
            )

        // const imageBlob = await response.blob();
        // setAnnotatedSnapshot(URL.createObjectURL(imageBlob));
      } else {
        console.error('Error processing snapshot on the server');
      }
    })
    } catch (error) {
      console.error('Error sending snapshot to the server:', error);
    }

    
    
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.jpg, .jpeg, .png'
  });



  function dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
  
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    return new Blob([ab], { type: mimeString });
  }


  const [isModalOpen, setModalOpen] = useState(false);

  window.addEventListener("resize", showButton);
  return (
    <>
    <MyPopup showModal={ isModalOpen } setModal={ setModalOpen } setMood={setMood} />

      <nav className="navbar">
        <div className="navbar-container">
          <Link className="nav-links" onClick={ () => setModalOpen(true) }>
            <CameraButton color="white" fontSize="large" />
          </Link>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MOOD
            MUSIC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>

          <Link  className="navbar-links" {...getRootProps()}>
          <input {...getInputProps()} />
            <UploadFile color="white" fontSize="large" />
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
