// import { useContext } from "react";
// import { FavoritesContext } from "../../contexts/FavouritesContext";
import { FavouriteGame } from "./FavouriteGame/FavouriteGame";

export const MyFavourites = () => {
//   const favorites = useContext(FavoritesContext);
  return (
    <section className="favourites-section">
      <h1 className="favourites-section-heading">My Favorite Games</h1>
      
      <div className="gameshelf-section-games">
        <FavouriteGame />
      </div>

    </section>
  );
};
