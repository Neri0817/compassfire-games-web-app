export const Register = () => {
  return (
    <section className="register-section">
      <div className="register-section-container">
        <div className="register-section-container-img"></div>
        <div className="register-section-container-div">
          <h1>Create Account</h1>

          <form method="POST" className="register-section-container-div-form">
            <div className="register-section-container-div-form-input">
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
              />
            </div>

            <div className="register-section-container-div-form-input">
              <input type="email" placeholder="Email" name="email" required />
            </div>

            <div className="register-section-container-div-form-input">
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
            </div>

            <div className="register-section-container-div-form-input">
              <input
                type="password"
                placeholder="Repeat password"
                name="repeatPassword"
                required
              />
            </div>

            <button
              type="submit"
              className="register-section-container-div-form-btn"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
