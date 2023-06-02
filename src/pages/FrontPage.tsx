import "../css/FrontPage.css";

const FrontPage = () => {
  return (
    <div>
      <div className="menu"></div>
      <div className="info-container">
        <div className="info-box">
          <img
            className="info-img"
            src="https://i.pinimg.com/564x/5c/44/40/5c44402b18cd601cc1f5dc9827cb163a.jpg"
            alt="placeholder"
          />
          <div className="links">
            <a
              className="link-item"
              href="https://www.instagram.com/moonckae/"
              target="-blank"
            >
              ig
            </a>
            <a
              className="link-item"
              href="http://tiktok.com/@mooncvk3"
              target="-blank"
            >
              tiktok
            </a>
            <a
              className="link-item"
              href="https://pin.it/4AapxEb"
              target="-blank"
            >
              pinterest
            </a>
            <a
              className="link-item"
              href="https://www.youtube.com/@mooncvke"
              target="-blank"
            >
              youtube
            </a>
            <a
              className="link-item"
              href="https://www.redbubble.com/people/mooncvke/shop"
              target="-blank"
            >
              shop
            </a>
          </div>
          <div className="info-text">
            Hello! I'm 20yo self-taught artist from Finland. I'm full-time
            IT-student but have a great passion for art which has became big
            part of my life. Here ypu can see lot of my art. I hope you enjoy!
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
