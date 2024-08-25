import React from "react";
import { Link } from "react-router-dom";

import "../styles/forgot.css";
const Forgot = () => {
    return (
      <div className="forgot-password">
      <h4>Password Recovery</h4>
      
      <form method="post">
        <label htmlFor="email">Enter Your Email</label>
        <input type="email" name="email" required /> <br />

        <label htmlFor="verificationCode">Enter Verification Code</label>
        <input type="text" name="verificationCode" required /> <br />
        
        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Back to Login</Link>
    </div>

       
      
    )
  }
  
  export default Forgot