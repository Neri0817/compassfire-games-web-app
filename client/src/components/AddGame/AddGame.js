export const AddGame = () => {
  return (
    <section className="addgame-section">
      <h1 className="addgame-section-heading">Add Game</h1>
      <div className="addgame-section-container">
        <div className="addgame-section-container-img"></div>
        <div className="addgame-section-container-form">
          <form>
            <div>
              <label>Name:</label>
              {/* value={gameName} onChange={} */}
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Game Name"
              />
            </div>
            <div>
              <label>Genre:</label>
              <input
                type="text"
                id="genre"
                name="genre"
                placeholder="Game Genre"
              />
            </div>
            <div>
              <label>Image:</label>
              <input
                type="text"
                id="imageUrl"
                name="imageUrl"
                placeholder="Upload an image..."
              />
            </div>
            <div>
              <label>Description:</label>
              <textarea
                id="description"
                cols="50"
                rows="5"
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
