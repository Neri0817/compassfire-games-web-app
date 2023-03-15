export const GameShelf = () => {
  return (
    <section className="gameshelf-section">
      <h1>GameShelf</h1>
      <div className="gameshelf-section-search">
        <form method="">
          <input type="search" placeholder="Search..." />
          {/* onChange={} value={} */}
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </section>
  );
};
