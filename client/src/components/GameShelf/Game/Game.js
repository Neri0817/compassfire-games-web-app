import { Link } from "react-router-dom";

export const Game = ({ name, genre, imageUrl, _id }) => {
  return (
    <div className="gameshelf-section-games-card">
      <div className="gameshelf-section-games-card-img">
        <img src={imageUrl} alt={name} />
        <div className="gameshelf-section-games-card-info">
          <h1>{name}</h1>
          <p>{genre}</p>
          <Link to="/gamedetails/">
            {/* todo the link to work */}
            <button>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
