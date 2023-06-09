import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../../contexts/FavouritesContext";

export const FavouriteGame = () => {
  const favorites = useContext(FavoritesContext);
  console.log(favorites.favorites.length);
  return (
    <>
      {favorites.favorites.length > 0 ? (
        favorites?.favorites.map((item) => (
          <div key={item._id} className="gameshelf-section-games-card">
            <div className="gameshelf-section-games-card-img">
              <Link to={`/gameshelf/${item._id}`}>
                <img src={item.imageUrl} alt={item.title} />
              </Link>
            </div>

            <div className="gameshelf-section-games-card-info">
              <h1>{item.title}</h1>
              <p>{item.category}</p>

              <div className="gameshelf-section-games-card-info-container">
                <button onClick={() => favorites.removeFromFavorites(item._id)}>
                  <i className="fa-solid fa-heart"></i>
                </button>
              </div>

              <Link to={`/gameshelf/${item._id}`}>
                <button>Details</button>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="favorite-section-empty">
          <h2>You don't have favorite games yet..</h2>
          <Link to="/gameshelf">Start Exploaring</Link>
        </div>
      )}
    </>
  );
};
