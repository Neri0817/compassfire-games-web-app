import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { validation } from "../../services/validation";

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
              {errors.email && <p className="errors-style">{errors.email}</p>}
              <input
                type="email"
                placeholder="Email"
                name={LoginFormKeys.Email}
                value={values[LoginFormKeys.Email]}
                onChange={changeHandler}
                onBlur={handleBlur}
              />
            </div>

            <div className="login-section-container-div-form-input">
              {errors.password && (
                <p className="errors-style">{errors.password}</p>
              )}
              <input
                type="password"
                placeholder="Password"
                name={LoginFormKeys.Password}
                value={values[LoginFormKeys.Password]}
                onChange={changeHandler}
                onBlur={handleBlur}
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
