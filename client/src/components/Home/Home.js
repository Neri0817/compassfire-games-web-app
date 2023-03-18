import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="home-section">
      <div className="home-section-content">
        <h1>
          Discover games <br /> that you enjoy
        </h1>
        <h4>Read about your favourite games</h4>
        <Link to="/gameshelf">Start Exploaring</Link>
      </div>
      <div className="home-section-img"></div>
    </section>
  );
};
