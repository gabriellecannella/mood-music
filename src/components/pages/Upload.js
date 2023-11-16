import React, { useState, useCallback } from "react";
import { UploadFile } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";
import SongsList from "../SongsList.js";

export default function Upload() {
  const [mood, setMood] = useState("");

  const onDrop = useCallback(
    async (acceptedFiles) => {
      try {
        const formData = new FormData();
        formData.append("snapshot", acceptedFiles[0]);

        const response = await fetch("http://127.0.0.1:5000/camera", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const label = await response.text();
          setMood(label);
        } else {
          console.error("Error processing snapshot on the server");
        }
      } catch (error) {
        console.error("Error sending snapshot to the server:", error);
      }
    },
    [setMood]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".jpg, .jpeg, .png",
  });

  return (
    <div>
      <div className="upload">
        <video src="/videos/background.mp4" autoPlay loop muted className="dimmed-video" />
        <div className="hero-container">
          <h1 style={{ color: "white" }}>UPLOAD IMAGE</h1>
          <div className="hero-btns">
            <UploadFile className="custom-upload-btn" color="black" fontSize="extra large" {...getRootProps()}>
              <input {...getInputProps()} />
            </UploadFile>
          </div>
        </div>
      </div>
      <div>
        <SongsList mood={mood} />
      </div>
    </div>
  );
}
