import React from "react";
import "../../App.css";
import PopupModal from '../PopupModal';
import {Button} from '../Button'
import '../CameraFeed.css'
 
function Camera({isModalOpen, setModalOpen}) {
  const toggleModal = () => setModalOpen(!isModalOpen);

  return(
    <div className="camera-container-two">
        <h1>Take a picture</h1>
       <p>To scan your mood</p>

      {/* <PopupModal /> */}
      <button onClick = {toggleModal}
        className="picturebutton"
      >Take a Picture</button>
    </div>
  ); 
}

export default Camera;


// function Camera({isModalOpen, setModalOpen}) {
//   const toggleModal = () => setModalOpen(!isModalOpen);

//   return(
//     <div className="camera-container">
//       <button onClick={toggleModal}>here!</button>
//       <h1>Take a picture</h1>
//       <p>To scan your mood</p>
//       <div className="camera-btns">

//       </div>
//     </div>
//   ); 
// }

// export default Camera;
