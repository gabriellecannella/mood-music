import React, { useState, useEffect, useCallback } from "react";
import { UploadFile } from "@mui/icons-material";
import { useDropzone } from 'react-dropzone';

export default function Upload({setMood}) {
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

  return(
    <div>
  <h1 className="upload">uploads</h1>
  <button {...getRootProps()}> <input {...getInputProps()} />
 upload</button>
  </div>);
}
