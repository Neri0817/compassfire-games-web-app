import logo from "../../images/compassfire-game-web-logo.png";

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <a href="/">
          <img src={logo} alt={"Logo"} />
        </a>
        <ul className="navbar-ul">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/gameshelf">GameShelf</a>
          </li>
          <li>
            <a href="/addgame">Add Game</a>
          </li>
          <li>
            <a href="/myfavourites">My Favourites</a>
          </li>
          <li>
            <a href="/myaccount">
              <i className="fa-solid fa-user"></i>
              <p>Neri0817</p>
            </a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
