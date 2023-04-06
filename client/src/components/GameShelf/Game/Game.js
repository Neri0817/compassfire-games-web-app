import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../../../contexts/FavouritesContext";
import { AuthContext } from "../../../contexts/AuthContext";

export const Game = ({ title, category, imageUrl, _id }) => {
  const favorites = useContext(FavoritesContext);
  const { isAuthenticated } = useContext(AuthContext);

  const handleAddToFavorites = () => {
    favorites.addToFavorites({ title, category, imageUrl, _id });
  };

  const handleRemoveFromFavorites = () => {
    favorites.removeFromFavorites(_id);
  };

  const isFavorite = favorites.isFav(_id);

  return (
    <div className="gameshelf-section-games-card">
      <div className="gameshelf-section-games-card-img">
        <Link to={`/gameshelf/${_id}`}>
          <img src={imageUrl} alt={title} />
        </Link>
      </div>

      <div className="gameshelf-section-games-card-info">
        <h1>{title}</h1>
        <p>{category}</p>

        {isAuthenticated && (
          <div className="gameshelf-section-games-card-info-container">
            {isFavorite ? (
              <button onClick={handleRemoveFromFavorites}>
                <i className="fa-solid fa-heart"></i>
              </button>
            ) : (
              <button onClick={handleAddToFavorites}>
                <i className="fa-regular fa-heart fa-flip"></i>
              </button>
            )}
          </div>
        )}

        <Link to={`/gameshelf/${_id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};
