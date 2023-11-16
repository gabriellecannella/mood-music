import React, { useState} from "react";
import "../../App.css";
import PopupModal from '../PopupModal';

function Camera() {
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  return(
    <div>
      <div className="hero-container">
        <video src="/videos/background.mp4" autoPlay loop muted />
      </div>
      <PopupModal />
      <button onClick={toggleModal}>click here!</button>
    </div>
  ); 
}

export default Camera;
