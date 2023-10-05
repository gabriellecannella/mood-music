import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import "./CameraComponent.css"

const CameraComponent = ({setMood, setModal}) => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [videoDevices, setVideoDevices] = useState([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [snapshot, setSnapshot] = useState(null);
  const [annotatedSnapshot, setAnnotatedSnapshot] = useState(null);

  useEffect(() => {
    async function getVideoDevices() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoInputs = devices.filter((device) => device.kind === 'videoinput');
        setVideoDevices(videoInputs);
      } catch (error) {
        console.error('Error enumerating video devices:', error);
      }
    }
    getVideoDevices();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          deviceId: selectedDeviceId, // Specify the selected camera
        },
        audio: false,
      });
      webcamRef.current.srcObject = stream;
      setIsCameraOn(true);
    } catch (error) {
      console.error('Error starting camera:', error);
    }
  };

  const stopCamera = () => {
    const stream = webcamRef.current.srcObject;
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setIsCameraOn(false);
    }
  };

  const takeSnapshot = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setSnapshot(imageSrc);

    // Send the image to the server and get the annotated image URL
    const formData = new FormData();
    formData.append('snapshot', dataURItoBlob(imageSrc));

    try {
      const response = await fetch('http://127.0.0.1:5000/camera', {
        method: 'POST',
        body: formData,
      }).then((response) =>{ 

        if (response.ok) {
          const label = response.text().then((label) => {
            console.log({label});
            setModal(false)
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
      console.log("noo"); 
      console.error('Error sending snapshot to the server:', error);
    }
  };
  
  // Function to convert data URI to Blob
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
  
  return (
    <div>
      <div className="camera-container">
        <div className="camera-preview">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={{
              facingMode: 'user',
              deviceId: selectedDeviceId, // Use the selected camera
            }}
            style={{ display: isCameraOn ? 'block' : 'none' }}
          />
        </div>
        <div className="camera-preview">
          {annotatedSnapshot && (
            <div>
              <img src={annotatedSnapshot} alt="Analyzed Snapshot" />
            </div>
          )}
      </div>
      </div>
        <div className="camera-controls">
          <label>Select Camera:</label>
          <select
            onChange={(e) => setSelectedDeviceId(e.target.value)}
            value={selectedDeviceId || ''}
          >
            <option value="">Default Camera</option>
            {videoDevices.map((device) => (
              <option key={device.deviceId} value={device.deviceId}>
                {device.label || `Camera ${videoDevices.indexOf(device) + 1}`}
              </option>
            ))}
          </select>
          <button onClick={takeSnapshot} disabled={!isCameraOn}>
            Take Snapshot
          </button>
        </div>
    </div>
  );
};

export default CameraComponent;
