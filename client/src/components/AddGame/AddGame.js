import { useGameContext } from "../../contexts/GameContext";
import { useForm } from "../../hooks/useForm";

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
                onChange={changeHandler}
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
                onChange={changeHandler}
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
                onChange={changeHandler}
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
                onChange={changeHandler}
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
