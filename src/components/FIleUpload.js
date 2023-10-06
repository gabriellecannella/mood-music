import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function FileUpload() {
  const onDrop = useCallback((acceptedFiles) => {
    // Handle the accepted files here (e.g., upload to a server)
    console.log('Accepted files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.jpg, .jpeg, .png', // Define accepted file types
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} />
    </div>
  );
}

export default FileUpload;