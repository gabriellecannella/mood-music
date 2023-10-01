import React from 'react';
import axios from 'axios';

export const CameraButton = () => {
  // Function to handle the button click
  const sendGetRequest = () => {
    // Make a GET request using Axios
    axios.get('http://127.0.0.1:5000/camera')
      .then(function (response) {
        // Handle the successful response here
        console.log('Response data:', response.data);
        // Bring the window to the front
        window.focus();
      })
      .catch(function (error) {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  };

  return (
    <button onClick={sendGetRequest}>Open Camera</button>
  );
};
