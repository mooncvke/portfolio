import React, { useState, useEffect } from "react";
import imageService from "../services/images";
import "../styles/PhotographyPage.css";

const PhotographyPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    imageService.getPhotography().then((data: any) => {
      setImages(data);
    });
  }, []);
  return (
    <div className="img-container">
      {images.map((src, i) => (
        <div className="container" key={i}>
          <img className="img" src={src} alt="traditional art" />
          <button className="btn"> OPEN </button>
        </div>
      ))}
    </div>
  );
};
export default PhotographyPage;
