import trad1 from "../photos/trad/1.jpg";
import trad2 from "../photos/trad/2.jpg";
import trad3 from "../photos/trad/3.jpg";
import trad4 from "../photos/trad/4.jpg";
import trad5 from "../photos/trad/5.jpg";
import trad6 from "../photos/trad/6.jpg";
import trad7 from "../photos/trad/7.jpg";
import trad8 from "../photos/trad/8.jpg";
import trad9 from "../photos/trad/9.jpg";
import trad10 from "../photos/trad/10.jpg";
import trad11 from "../photos/trad/11.jpg";

import "../styles/TraditionalPage.css";

const TraditionalPage = () => {
  const images = [
    trad1,
    trad2,
    trad3,
    trad4,
    trad5,
    trad6,
    trad7,
    trad8,
    trad9,
    trad10,
    trad11,
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
export default TraditionalPage;
