import { useEffect, useState } from "react";
import { useGameContext } from "../../contexts/GameContext";
import { useForm } from "../../hooks/useForm";
import { validation } from "../../services/validation";

export const AddGame = () => {
  const { onAddGameSubmit } = useGameContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      title: "",
      category: "",
      imageUrl: "",
      summary: "",
    },
    onAddGameSubmit
  );

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
    <section className="addgame-section">
      <h1 className="addgame-section-heading">Add Game</h1>
      <div className="addgame-section-container">
        <div className="addgame-section-container-img"></div>
        <div className="addgame-section-container-form">
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
                placeholder="Game Name"
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
                placeholder="Game Genre"
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
                placeholder="Upload an image..."
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
                rows="5"
                name="summary"
                value={values.summary}
                onChange={changeHandler}
                onBlur={handleBlur}
                placeholder="Game Description..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="addgame-section-container-form-btn"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
