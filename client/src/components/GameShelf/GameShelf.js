import { useState } from "react";
import { Game } from "./Game/Game";

export const GameShelf = ({ games }) => {
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
        <form method="">
          <input
            onChange={searchHandler}
            type="search"
            placeholder="Search your game..."
          />
          {/* onChange={} value={} */}
          <button type="submit" className="gameshelf-section-search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      <div className="gameshelf-section-games">
        {/* {games.map((game) => (
          <Game key={game._id} {...game} />
        ))} */}

        {filteredData.map((game) => (
          <Game key={game._id} {...game} />
        ))}
      </div>

      {Object.keys(filteredData).length === 0 && (
        <div className="gameshelf-section-games-empty">
          <h2>Sorry, this game is not added yet...</h2>
        </div>
      )}
    </section>
  );
};
