import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function FileUpload() {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the accepted files here (e.g., upload to a server)
    console.log('Accepted files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.jpg, .jpeg, .png, .gif, .pdf', // Define accepted file types
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
      <p>Drag & drop files here, or click to select files</p>
    </div>
  );
}

export default FileUpload;