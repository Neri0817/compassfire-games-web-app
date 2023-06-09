import { useState } from "react";
import { Link } from "react-router-dom";
import { useGameContext } from "../../contexts/GameContext";
import { Game } from "./Game/Game";

export const GameShelf = () => {
  const { games } = useGameContext();
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    let searchText = e.target.value.toLowerCase();
    setSearch(searchText);
  };

  const filteredData = games.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="gameshelf-section">
      <h1 className="gameshelf-section-heading">GameShelf</h1>
      <div className="gameshelf-section-search">
        <form>
          <i className="fa-solid fa-magnifying-glass gameshelf-section-search-btn"></i>
          <input
            onChange={searchHandler}
            type="search"
            placeholder="Search your game..."
          />
          {/* <button type="submit" className="gameshelf-section-search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button> */}
        </form>
      </div>
      <div className="gameshelf-section-games">
        {filteredData.map((game) => (
          <Game key={game._id} {...game} />
        ))}
      </div>
      {games.length === 0
        ? games.length === 0 && (
            <div className="gameshelf-section-games-empty">
              <h2>No games added yet...</h2>
            </div>
          )
        : Object.keys(filteredData).length === 0 && (
            <div className="gameshelf-section-games-empty">
              <h2>Sorry, this game is not added yet...</h2>
              <h4>Go and add your recommended game!</h4>
              <Link to="/addgame">Add Game</Link>
            </div>
          )}
    </section>
  );
};
