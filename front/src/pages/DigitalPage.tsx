import { useState, useEffect } from "react";
import imageService from "../services/images";
import "../styles/DigitalPage.css";

type ImageType = {
  category: string;
  comments: string;
  name: string;
  url: string;
  year: number;
  id: string;
};

const DigitalPage = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    imageService.getDigital().then((data: any) => {
      console.log("data", data);
      setImages(data);
    });
  }, []);

  useEffect(() => {
    console.log("images", images);
  }, [images]);

  return (
    <div className="img-container">
      {images.map((image) => (
        <div className="container" key={image.id}>
          <img className="img" src={image.url} alt="digital art" />
          <button className="btn"> OPEN </button>
        </div>
      ))}
    </div>
  );
};
export default DigitalPage;
