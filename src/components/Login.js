import React from "react";
import { Link } from "react-router-dom";

import "../styles/login.css";

const Login = () => {
  return (
    <div className="signin">
      <h4> Sign In </h4>
      <form method="post">
        <div className="form-group">
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group password-group">
          <label htmlFor="password"> Password </label>
          <input type="password" name="password" id="signinPassword" required />
        </div>

        <div className="form-group-remember">
          <div>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe"> Remember Me </label>
          </div>
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <input type="submit" value="Sign In" />
      </form>
      <span className="login-prompt">
        {" "}
        Don't have an account?<Link to="/login"> Sign Up</Link>
      </span>
    </div>
  );
};

export default Login;
