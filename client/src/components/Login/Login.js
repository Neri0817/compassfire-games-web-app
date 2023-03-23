import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export const Login = () => {
  const { onLoginSubmit } = useAuthContext();
  const { values, changeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );

  return (
    <section className="login-section">
      <h1 className="login-section-heading">Login</h1>
      <div className="login-section-container">
        <div className="login-section-container-div">
          <form
            className="login-section-container-div-form"
            method="POST"
            onSubmit={onSubmit}
          >
            <h2>Welcome Back!</h2>

            <p>
              If you don't have profile click <Link to="/register">here</Link>
            </p>

            <div className="login-section-container-div-form-input">
              <input
                type="email"
                placeholder="Email"
                name={LoginFormKeys.Email}
                value={values[LoginFormKeys.Email]}
                onChange={changeHandler}
              />
            </div>

            <div className="login-section-container-div-form-input">
              <input
                type="password"
                placeholder="Password"
                name={LoginFormKeys.Password}
                value={values[LoginFormKeys.Password]}
                onChange={changeHandler}
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
