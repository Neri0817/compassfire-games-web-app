import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { gameServiceFactory } from "../../services/gameService";
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";

export const GameDetails = () => {
  const { userId } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    gameService.getOne(gameId).then((result) => {
      setGame(result);
    });
  }, [gameId]);

  const onCommentSubmit = async (e) => {
    e.preventDefault();

    const result = await gameService.addComment(gameId, {
      username,
      comment,
    });

    setGame((state) => ({
      ...state,
      comments: { ...state.comments, [result._id]: result },
    }));
    setUsername("");
    setComment("");
  };

  const isOwner = game._ownerId === userId;

  const onDeleteClick = async () => {
    await gameService.delete(game._id);

    // TODO: delete from state

    navigate("/gameshelf");
  };
  return (
    <section className="details-section">
      <h1 className="details-section-heading">Game Details</h1>
      <div className="details-section-container">
        <div className="details-section-container-img">
          <img
            src="https://image.api.playstation.com/vulcan/ap/rnd/202212/0906/nStfI0jjW9j8U4C8uXLu3AT0.png"
            alt="Wo Long: Fallen Dynasty"
          />
        </div>
        <div className="details-section-container-info">
          <h1 className="details-section-container-info-title">
            Wo Long: Fallen Dynasty
          </h1>
          <h3 className="details-section-container-category">
            Blood and Gore, Violence
          </h3>

          <h4 className="details-section-container-info-heading">
            Description:
          </h4>
          <p className="details-section-container-info-summary">
            &nbsp;&nbsp;&nbsp; Wo Long refers to a crouching dragon, and also
            refers to a hero or person of greatness who is not yet known. This
            is the story of officers, who will later become heroes, during their
            ‘unknown’ period, and also the story of a protagonist’s rise from
            being a ‘nobody’.
          </p>

          <div className="details-section-container-info-btn">
            <Link
              to={`/gameshelf/${game._id}/edit`}
              className="details-section-container-info-btn-edit"
            >
              Edit
            </Link>
            <button
              className="details-section-container-info-btn-delete"
              onClick={onDeleteClick}
            >
              Delete
            </button>
          </div>

          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {/* {game.comments &&
                Object.values(game.comments).map((x) => (
                  <li key={x._id} className="comment">
                    <p>
                      <i className="fa-solid fa-user"></i> {x.username}: {x.comment}
                    </p>
                  </li>
                ))} */}
              <li>
                <p>
                  <i className="fa-solid fa-user"></i> Pesho: Nice game!
                </p>
              </li>
              <li>
                <p>
                  <i className="fa-solid fa-user"></i> Pesho: Nice game!
                </p>
              </li>
            </ul>

            {/* {!Object.values(game.comments).length && (
                        <p className="no-comment">No comments.</p>
                    )} */}
          </div>
        </div>
      </div>

      <article className="details-create-comment">
        <h2>Leave a comment:</h2>
        <form
          className="details-create-comment-form"
          onSubmit={onCommentSubmit}
        >
          <div className="details-create-comment-form-user">
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <textarea
            name="comment"
            rows="5"
            placeholder="Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <input
            className="details-create-comment-form-submit"
            type="submit"
            value="Add Comment"
          />
        </form>
      </article>
    </section>
  );
};
