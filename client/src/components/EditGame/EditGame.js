import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGameContext } from "../../contexts/GameContext";

import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { gameServiceFactory } from "../../services/gameService";
import { validation } from "../../services/validation";

export const EditGame = () => {
  const { onGameEditSubmit } = useGameContext();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId]);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validation(values));
  }, [values]);

  const handleBlur = (event) => {
    const { name, value } = event.target;

    // Validate the value
    const error = validation(name, value);

    // Update the errors state
    setErrors({ ...errors, [name]: error });
  };

  return (
    <section className="edit-section">
      <h1 className="edit-section-heading">Edit Game</h1>
      <div className="edit-section-container">
        <div className="edit-section-container-form">
          <form onSubmit={onSubmit}>
            <div>
              <label>Name:</label>
              {errors.text && (
                <p className="errors-style">
                  <i className="fa-solid fa-triangle-exclamation fa-beat-fade"></i>
                  &nbsp; &nbsp;
                  {errors.text}
                </p>
              )}
              <input
                type="text"
                id="title"
                name="title"
                value={values.title}
                onChange={changeHandler}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label>Genre:</label>
              {errors.text && (
                <p className="errors-style">
                  <i className="fa-solid fa-triangle-exclamation fa-beat-fade"></i>
                  &nbsp; &nbsp;
                  {errors.text}
                </p>
              )}
              <input
                type="text"
                id="category"
                name="category"
                value={values.category}
                onChange={changeHandler}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label>Image:</label>
              {errors.text && (
                <p className="errors-style">
                  <i className="fa-solid fa-triangle-exclamation fa-beat-fade"></i>
                  &nbsp; &nbsp;
                  {errors.text}
                </p>
              )}
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={values.imageUrl}
                onChange={changeHandler}
                onBlur={handleBlur}
              />
            </div>
            <div>
              <label>Description:</label>
              {errors.text && (
                <p className="errors-style">
                  <i className="fa-solid fa-triangle-exclamation fa-beat-fade"></i>
                  &nbsp; &nbsp;
                  {errors.text}
                </p>
              )}
              <textarea
                type="text"
                id="summary"
                cols="50"
                rows="7"
                name="summary"
                value={values.summary}
                onChange={changeHandler}
                onBlur={handleBlur}
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
