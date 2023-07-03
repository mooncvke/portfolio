import React, { useState, useEffect } from "react";
import imageService from "../services/images";
import "../styles/ImageContainer.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ImageType = {
  category: string;
  comments: string;
  name: string;
  url: string;
  year: number;
  id: string;
};

const PhotographyPage = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    imageService.getPhotography().then((data: any) => {
      setImages(data);
    });
  }, []);
  return (
    <div className="img-container">
      {images.map((image) => (
        <div className="container" key={image.id}>
          <LazyLoadImage
            className="img"
            src={image.url}
            alt="traditional art"
          />
          <button className="btn"> OPEN </button>
        </div>
      ))}
    </div>
  );
};
export default PhotographyPage;
