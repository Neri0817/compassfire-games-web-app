import { useEffect, useReducer } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { gameServiceFactory } from "../../services/gameService";
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
import { GameComments } from "./GameComments/GameComments";
import * as commentService from "../../services/commentService";
import { gameReducer } from "../../reducers/gameReducer";
import { useGameContext } from "../../contexts/GameContext";

export const GameDetails = () => {
  const { gameId } = useParams();
  const { userId, isAuthenticated, userEmail } = useAuthContext();
  const { deleteGame } = useGameContext();

  const [game, dispatch] = useReducer(gameReducer, {});
  const gameService = useService(gameServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      gameService.getOne(gameId),
      commentService.getAll(gameId),
    ]).then(([gameData, comments]) => {
      const gameState = {
        ...gameData,
        comments,
      };

      dispatch({ type: "GAME_FETCH", payload: gameState });
    });
  }, [gameId]);

  const onCommentSubmit = async (values) => {
    const response = await commentService.create(gameId, values.comment);

    dispatch({
      type: "COMMENT_ADD",
      payload: response,
      userEmail,
    });
  };

  const isOwner = game._ownerId === userId;

  const onDeleteClick = async () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm(`Are you sure you want to delete ${game.title}`);

    if (result) {
      await gameService.delete(game._id);

      deleteGame(game._id);
    }

    navigate("/gameshelf");
  };

  return (
    <section className="details-section">
      <h1 className="details-section-heading">Game Details</h1>
      <div className="details-section-container">
        <div className="details-section-container-img">
          <img src={game.imageUrl} alt={game.title} />
        </div>
        <div className="details-section-container-info">
          <h1 className="details-section-container-info-title">{game.title}</h1>
          <h3 className="details-section-container-category">
            Genre: {game.category}
          </h3>

          <h4 className="details-section-container-info-heading">
            Description:
          </h4>
          <p className="details-section-container-info-summary">
            &nbsp;&nbsp;&nbsp; {game.summary}
          </p>

          {isOwner && (
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
          )}

          <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
              {game.comments &&
                game.comments.map((x) => (
                  <li key={x._id} className="comment">
                    <p>
                      <i className="fa-solid fa-user"></i>
                      {x.author.email}: {x.comment}
                    </p>
                  </li>
                ))}

              {game?.comments && (
                <li>
                  <p className="no-comment">No comments yet..</p>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {isAuthenticated && <GameComments onCommentSubmit={onCommentSubmit} />}
    </section>
  );
};
