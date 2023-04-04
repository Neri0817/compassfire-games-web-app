import { Link } from "react-router-dom";

export const OwnedGames = ({ _id, imageUrl, title, category }) => {
  return (
    <div key={_id} className="gameshelf-section-games-card">
      <div className="gameshelf-section-games-card-img">
        <Link to={`/gameshelf/${_id}`}>
          <img src={imageUrl} alt={title} />
        </Link>
      </div>

      <div className="gameshelf-section-games-card-info">
        <h1>{title}</h1>
        <p>{category}</p>

        <Link to={`/gameshelf/${_id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};
