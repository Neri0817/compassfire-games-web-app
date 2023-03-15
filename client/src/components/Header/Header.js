import { Link } from "react-router-dom";
import logo from "../../images/compassfire-game-web-logo.png";

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt={"Logo"} />
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
          <li>
            <Link to="/addgame">Add Game</Link>
          </li>
          <li>
            <Link to="/myfavourites">My Favourites</Link>
          </li>
          <li>
            <Link to="/myaccount">
              <i className="fa-solid fa-user"></i>
              <p>Neri0817</p>
            </Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
