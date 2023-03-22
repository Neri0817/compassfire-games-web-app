import { useState } from "react";

export const AddGame = ({ onAddGameSubmit }) => {
  const [values, setValues] = useState({
    title: "",
    category: "",
    imageUrl: "",
    summary: "",
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
                id="title"
                name="title"
                value={values.title}
                onChange={onChangeHandler}
                placeholder="Game Name"
              />
            </div>
            <div>
              <label>Genre:</label>
              <input
                type="text"
                id="category"
                name="category"
                value={values.category}
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
                id="summary"
                cols="50"
                rows="5"
                name="summary"
                value={values.summary}
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
