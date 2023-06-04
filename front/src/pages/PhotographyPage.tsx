import photo1 from "../photos/photo/1.jpg";
import photo2 from "../photos/photo/2.jpg";
import photo3 from "../photos/photo/3.jpg";
import photo4 from "../photos/photo/4.jpg";
import photo5 from "../photos/photo/5.jpg";
import photo6 from "../photos/photo/6.jpg";
import photo7 from "../photos/photo/7.jpg";
import photo8 from "../photos/photo/8.jpg";
import photo9 from "../photos/photo/9.jpg";
import photo10 from "../photos/photo/10.jpg";
import photo11 from "../photos/photo/11.jpg";
import photo12 from "../photos/photo/12.jpg";
import photo13 from "../photos/photo/13.jpg";
import photo14 from "../photos/photo/14.jpg";

import "../styles/PhotographyPage.css";

const PhotographyPage = () => {
  const images = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
  ];
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
