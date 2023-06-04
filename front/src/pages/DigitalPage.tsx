import digi1 from "../photos/digi/1.jpg";
import digi2 from "../photos/digi/2.jpg";
import digi3 from "../photos/digi/3.jpg";
import digi4 from "../photos/digi/4.jpg";
import digi5 from "../photos/digi/5.jpg";
import digi6 from "../photos/digi/6.jpg";
import digi7 from "../photos/digi/7.jpg";
import digi8 from "../photos/digi/8.PNG";
import digi9 from "../photos/digi/9.PNG";
import digi10 from "../photos/digi/10.PNG";
import digi11 from "../photos/digi/11.PNG";
import digi12 from "../photos/digi/12.PNG";
import digi13 from "../photos/digi/13.PNG";
import digi14 from "../photos/digi/14.PNG";
import digi15 from "../photos/digi/15.PNG";
import digi16 from "../photos/digi/16.PNG";
import digi17 from "../photos/digi/17.PNG";
import digi18 from "../photos/digi/18.PNG";
import digi19 from "../photos/digi/19.PNG";
import digi20 from "../photos/digi/20.PNG";
import digi21 from "../photos/digi/21.PNG";

import "../styles/DigitalPage.css";

const DigitalPage = () => {
  const images = [
    digi1,
    digi2,
    digi3,
    digi4,
    digi5,
    digi6,
    digi7,
    digi8,
    digi9,
    digi10,
    digi11,
    digi12,
    digi13,
    digi14,
    digi15,
    digi16,
    digi17,
    digi18,
    digi19,
    digi20,
    digi21,
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
export default DigitalPage;
