import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FileUpload, LibraryMusic, UploadFile } from "@mui/icons-material";
import { CameraButton } from './CameraButton';
import PopupModal from "./PopupModal";
import MyPopup from "./MyPopup";

function Navbar({setMood}) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
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

          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            <UploadFile color="white" fontSize="large" />
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
