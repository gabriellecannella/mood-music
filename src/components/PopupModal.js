import React, { Component } from 'react';
import "./PopupModal.css";
import CameraComponent from './CameraComponent';

class PopupModal extends Component {
  constructor(props) {
    super(props);

    // Use the props to initialize the initial state
    this.state = {
      showModal: props.showModal || false,
    };
  } 

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Popup</button>
        { this.state.showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={this.closeModal}>
                &times;
              </span>
              <div className = "selectedCamera">
              < CameraComponent />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default PopupModal;
