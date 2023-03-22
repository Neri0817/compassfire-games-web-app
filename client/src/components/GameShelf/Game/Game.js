import { Link } from "react-router-dom";

export const Game = ({ title, category, imageUrl, _id }) => {
  return (
    <div className="gameshelf-section-games-card">
      <div className="gameshelf-section-games-card-img">
        <img src={imageUrl} alt={title} />
        <div className="gameshelf-section-games-card-info">
          <h1>{title}</h1>
          <p>{category}</p>
          <Link to="/gamedetails/">
            {/* todo the link to work */}
            <button>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
