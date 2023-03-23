import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../services/gameService";

export const EditGame = ({ onGameEditSubmit }) => {
  const { gameId } = useParams();
  const gameService = useService(gameServiceFactory);
  const { values, changeHandler, onSubmit, changeValues } = useForm(
    {
      _id: "",
      title: "",
      category: "",
      imageUrl: "",
      summary: "",
    },
    onGameEditSubmit
  );

  useEffect(() => {
    gameService.getOne(gameId).then((result) => {
      changeValues(result);
    });
  }, [gameId]);

  return (
    <section className="edit-section">
      <h1 className="edit-section-heading">Edit Game</h1>
      <div className="edit-section-container">
        <div className="edit-section-container-form">
          <form onSubmit={onSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={values.title}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label>Genre:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={values.category}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={values.imageUrl}
                onChange={changeHandler}
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                id="summary"
                cols="50"
                rows="7"
                name="summary"
                value={values.summary}
                onChange={changeHandler}
              ></textarea>
            </div>
            <button type="submit" className="edit-section-container-form-btn">
              Edit
            </button>
          </form>
        </div>
        <div className="edit-section-container-img"></div>
      </div>
    </section>
  );
};
