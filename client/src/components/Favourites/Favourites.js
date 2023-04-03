
import { FavouriteGame } from "./FavouriteGame/FavouriteGame";

export const MyFavourites = () => {
  return (
    <section className="favourites-section">
      <h1 className="favourites-section-heading">My Favorite Games</h1>
      
      <div className="gameshelf-section-games">
        <FavouriteGame />
      </div>

    </section>
  );
};
