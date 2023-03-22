import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );

  return (
    <section className="register-section">
      <h1 className="register-section-heading">Create Account</h1>
      <div className="register-section-container">
        <div className="register-section-container-img"></div>
        <div className="register-section-container-div">
          <h2>Register</h2>

          <p>
            If you already have profile click <Link to="/login">here</Link>
          </p>
          <form
            className="register-section-container-div-form"
            method="POST"
            onSubmit={onSubmit}
          >
            <div className="register-section-container-div-form-input">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={changeHandler}
              />
            </div>

            <div className="register-section-container-div-form-input">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={changeHandler}
              />
            </div>

            <div className="register-section-container-div-form-input">
              <input
                type="password"
                placeholder="Repeat password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={changeHandler}
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
