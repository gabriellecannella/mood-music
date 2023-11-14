import React from "react";
import "../../App.css";
import PopupModal from '../PopupModal';

function Camera({isModalOpen, setModalOpen}) {
  const toggleModal = () => setModalOpen(!isModalOpen);

  return(
    <div>

      <PopupModal />
      <button onClick={toggleModal}>click here!</button>
    </div>
  ); 
}

export default Camera;
