import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";
import { validation } from "../../services/validation";

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

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validation(values));
  }, [values]);

  const handleBlur = (event) => {
    const { name, value } = event.target;

    // Validate the value
    const error = validation(name, value);

    // Update the errors state
    setErrors({ ...errors, [name]: error });
  };

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
              {errors.email && (
                <p className="errors-style">
                  <i className="fa-solid fa-triangle-exclamation fa-beat-fade"></i>
                  &nbsp; &nbsp;
                  {errors.email}
                </p>
              )}
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={changeHandler}
                onBlur={handleBlur}
              />
            </div>

            <div className="register-section-container-div-form-input">
              {errors.password && (
                <p className="errors-style">
                  <i className="fa-solid fa-triangle-exclamation fa-beat-fade"></i>
                  &nbsp; &nbsp;
                  {errors.password}
                </p>
              )}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={changeHandler}
                onBlur={handleBlur}
              />
            </div>

            <div className="register-section-container-div-form-input">
              {errors.password && (
                <p className="errors-style">
                  <i className="fa-solid fa-triangle-exclamation fa-beat-fade"></i>
                  &nbsp; &nbsp;
                  {errors.password}
                </p>
              )}
              <input
                type="password"
                placeholder="Repeat password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={changeHandler}
                onBlur={handleBlur}
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
