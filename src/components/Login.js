import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  const [errorMsg, setErrorMsg] = useState({
    hidden: false,
    message: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrorMsg({ hidden: true, message: "" });
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
      const xhr = new XMLHttpRequest();
      const formData = new FormData(e.target);
      xhr.open("POST", `${process.env.REACT_APP_SERVER}/employee/login`, true);
      xhr.onload = () => {
        if (xhr.status === 200) {
          console.log(JSON.parse(xhr.response));
          navigate("/dashboard")
        } else {
          setErrorMsg({ hidden: false, message: "Invalid email or password" });
          console.log(`Error code : ${xhr.status}`);
        }
      }
      xhr.withCredentials = true;
      xhr.send(formData);
    }
  };

  return (
    <div className="signin">
      <h4>Sign In</h4>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
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
            <p style={{display: errorMsg.hidden? "none" : "inline"}} > {errorMsg.message} </p>
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
