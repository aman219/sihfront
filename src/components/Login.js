import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let emailError = "";
    let passwordError = "";

    // Email validation
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailRegex.test(formValues.email)) {
      emailError = "Invalid email address";
    }

    // Password validation
    if (formValues.password.length < 8) {
      passwordError = "Password must be at least 8 characters long";
    }

    if (emailError || passwordError) {
      setFormErrors({ email: emailError, password: passwordError });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
   
      console.log("Form Submitted Successfully");
    }
  };

  return (
    <div className="signin">
      <h4>Sign In</h4>
      <form onSubmit={handleSubmit} method="post">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            className={formErrors.email ? "error-input" : ""}
            required
          />
          {formErrors.email && (
            <span className="error-message">{formErrors.email}</span>
          )}
        </div>

        <div className="form-group password-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            className={formErrors.password ? "error-input" : ""}
            required
          />
          {formErrors.password && (
            <span className="error-message">{formErrors.password}</span>
          )}
        </div>

        <div className="form-group-remember">
          <div>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe"> Remember Me </label>
          </div>
          <Link to="/forgot">Forgot Password?</Link>
        </div>

        <input type="submit" value="Sign In" />
      </form>
      <span className="login-prompt">
        {" "}
        Don't have an account?<Link to="/signup"> Sign Up</Link>
      </span>
    </div>
  );
};

export default Login;
