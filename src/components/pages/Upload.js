import React, { useState, useEffect, useCallback } from "react";
import { UploadFile } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";
import { Button_Cam } from "../Button_Cam";
import "../HeroSection.css";

export default function Upload({ setMood }) {
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
    <div className="upload">
      <div className="hero-container">
        <h1 style={{ color: "black" }}>UPLOAD</h1>
        <p style={{ color: "black" }}>your image below.</p>
        <div className="hero-btns">
          <Button_Cam
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            <UploadFile color="black" fontSize="large" />
          </Button_Cam>
        </div>
        <button {...getRootProps()}>
          {" "}
          <input {...getInputProps()} />
          upload
        </button>
      </div>
    </div>
  );
}
