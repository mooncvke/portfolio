import { useEffect, useState } from "react";
import "../styles/ImageContainer.css";
import imageService from "../services/images";
import { LazyLoadImage } from "react-lazy-load-image-component";

type ImageType = {
  category: "";
  comments: "";
  name: "";
  url: "";
  year: 0;
  id: "";
};

const TraditionalPage = () => {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    imageService.getTraditional().then((data: any) => {
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
export default TraditionalPage;
