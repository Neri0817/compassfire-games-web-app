import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <section className="page-404-section">
      <h1 className="page-404-section-heading">404 Page not found</h1>
      <div className="page-404-section-container">
        <div className="page-404-section-container-btn">
          <Link to="/login">Go to Login Page</Link>
        </div>
        <div className="page-404-section-img"></div>
      </div>
    </section>
  );
};
