import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <div className="title">
        <a className="home-link" href="/">
          Art Portfolio
        </a>
        <hr className="line" />
      </div>

      <div>
        <div className="navbar">
          <a className="navitem" href="/traditional">
            Traditional
          </a>
          <a className="navitem" href="/digital">
            Digital
          </a>
          <a className="navitem" href="/photography">
            Photography
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
