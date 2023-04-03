import { Link } from "react-router-dom";

export const Game = ({ title, category, imageUrl, _id }) => {
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

        <div className="gameshelf-section-games-card-info-container">
          <button>
            <i className="fa-regular fa-heart fa-flip"></i>
          </button>
        </div>

        <Link to={`/gameshelf/${_id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};
