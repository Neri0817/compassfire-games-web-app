import { Game } from "./Game/Game";

export const GameShelf = ({ games }) => {
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
        {games.map((game) => (
          <Game key={game._id} {...game} />
        ))}
      </div>
      {games.length === 0 && (
        <div className="gameshelf-section-games-empty">
          <h2>No games added yet!</h2>
        </div>
      )}
    </section>
  );
};
