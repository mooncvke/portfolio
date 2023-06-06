import { useState } from "react";
import "../styles/TraditionalPage.css";

const TraditionalPage = () => {
  const [images, setImages] = useState([]);

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
export default TraditionalPage;
