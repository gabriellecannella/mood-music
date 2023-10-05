import { useState } from "react";

import CameraComponent from './CameraComponent';
import "./PopupModal.css";

const MyPopup = ({ showModal, setModal, setMood}) => {
    return ( <div>
          { showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={ () => setModal(false) }>
                  &times;
                </span>
                <div className = "selectedCamera">
                < CameraComponent setMood={setMood} setModal={setModal}/>
                </div>
              </div>
            </div>
          )}
        </div>
      );
}

export default MyPopup;