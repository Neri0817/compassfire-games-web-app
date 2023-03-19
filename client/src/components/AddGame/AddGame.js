import { useState } from "react";

export const AddGame = ({ onAddGameSubmit }) => {
  const [values, setValues] = useState({
    name: "",
    genre: "",
    imageUrl: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddGameSubmit(values);
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
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={onChangeHandler}
                placeholder="Game Name"
              />
            </div>
            <div>
              <label>Genre:</label>
              <input
                type="text"
                id="genre"
                name="genre"
                value={values.genre}
                onChange={onChangeHandler}
                placeholder="Game Genre"
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                value={values.imageUrl}
                onChange={onChangeHandler}
                placeholder="Upload an image..."
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                id="description"
                cols="50"
                rows="5"
                name="description"
                value={values.description}
                onChange={onChangeHandler}
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
