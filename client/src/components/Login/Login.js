export const Login = () => {
  return (
    <section className="login-section">
      <h1 className="login-section-heading">Login</h1>
      <div className="login-section-container">
        <div className="login-section-container-div">
          <form className="login-section-container-div-form">
            <div className="login-section-container-div-form-input">
              <input type="email" placeholder="Email" name="email" required />
            </div>

            <div className="login-section-container-div-form-input">
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>
            <button
              type="submit"
              className="login-section-container-div-form-btn"
            >
              Login
            </button>
          </form>
        </div>
        <div className="login-section-container-img"></div>
      </div>
    </section>
  );
};
