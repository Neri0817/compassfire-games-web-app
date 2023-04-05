import { Link } from "react-router-dom";
import logo from "../../images/compassfire-game-web-logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container-row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="/">about us</a>
              </li>
              <li>
                <a href="/">our services</a>
              </li>
              <li>
                <a href="/">privacy policy</a>
              </li>
              <li>
                <a href="/">affiliate program</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>contact us</h4>
            <ul>
              <li>
                <i className="fa-regular fa-compass"></i>
                <a href="/">CompassFire</a>
              </li>
              <li>
                <i className="fa-solid fa-location-dot"></i>

                <a href="/">bul. Madara, ul. Hristo Botev 55</a>
              </li>
              <li>
                <i className="fa-solid fa-globe"></i>
                <a href="/">Sofia, Bulagria</a>
              </li>
              <li>
                <i className="fa-solid fa-headset"></i>
                <a href="/">+555 666 777 8889</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="/">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="footer-col footer-img-logo">
            <Link to="/">
              <img src={logo} alt={"CompassFire Logo"} />
            </Link>
          </div>
        </div>
      </div>

      <p className="footer-p">
        Designed by <a href="https://github.com/Neri0817">Neri0817</a>
      </p>
      <p className="footer-p">
        © 2023, CompassFire Games. All rights reserved.
      </p>
    </footer>
  );
};
