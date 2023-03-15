import { Link } from "react-router-dom";

export const GameShelf = () => {
  return (
    <section className="gameshelf-section">
      <h1 className="gameshelf-section-heading">GameShelf</h1>
      <div className="gameshelf-section-search">
        <form method="">
          <input type="search" placeholder="Search your game..." />
          {/* onChange={} value={} */}
          <button type="submit" className="gameshelf-section-search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="gameshelf-section-games">
        <div className="gameshelf-section-games-card">
          <div className="gameshelf-section-games-card-img">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
              alt="Game's name"
            />
            <div className="gameshelf-section-games-card-info">
              <h1>Minecraft</h1>
              <p>
                Genre: Arcade, Sandbox, Adventure, Single-player multiplayer
              </p>
              <Link to="/details/:gameId">
                <button>Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
