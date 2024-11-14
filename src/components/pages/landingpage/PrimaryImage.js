import React from "react";
import "./PrimaryImage.css";

const PrimaryImage = ({ imageSrc }) => {
  return (
    <div className="primary">
      <img src={imageSrc} alt="PictureOfimage" className="primary__image" />
      <h1 className="primary__title">Welcome to Lokkit</h1>
    </div>
  );
};

export default PrimaryImage;
