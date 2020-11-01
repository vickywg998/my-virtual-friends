import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
// import {uploadFile} from "../../../API";

interface IImageUpload {
  files: File[];
  onDrop: (acceptedFiles: File[]) => void;
}

// type Props = {
//   uploadFile: (e: React.MouseEvent<HTMLElement>, files: IImageUpload | any) => void;
// };

const FileUploadContainer: React.FC<IImageUpload> = ({ files, onDrop }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png, image/jpg",
    onDrop: onDrop,
  });


  useEffect(
    () => () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const images = files.map((file: any) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt={file.name} />
      </div>
    </div>
  ));

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <h3 style={{ border: "solid #ffffff", width: "200px" }}>
            Drop files here
          </h3>
        ) : (
          <h3 style={{ border: "solid #ffffff", width: "200px" }}>
            Drag 'n' drop some files here, or click to select files to Preview
          </h3>
        )}
      </div>
      <div>{images}</div>
    </div>
  );
};

export default FileUploadContainer;
