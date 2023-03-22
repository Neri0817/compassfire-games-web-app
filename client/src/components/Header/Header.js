import { Link } from "react-router-dom";
import { useContext } from "react";
import logo from "../../images/compassfire-game-web-logo.png";

import { AuthContext } from "../../contexts/AuthContext";

export const Header = () => {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt={"CompassFire Logo"} />
        </Link>
        <ul className="navbar-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gameshelf">GameShelf</Link>
          </li>

          {isAuthenticated && (
            <>
              <li>
                <Link to="/addgame">Add Game</Link>
              </li>
              <li>
                <Link to="/myfavourites">My Favourites</Link>
              </li>
              <li>
                <Link to="/myaccount">
                  <i className="fa-solid fa-user"></i>
                  <p>{userEmail}</p>
                </Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </>
          )}

          {!isAuthenticated && (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
