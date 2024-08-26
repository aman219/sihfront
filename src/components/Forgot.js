import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/forgot.css";

const Forgot = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    verificationCode: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    verificationCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    let emailError = "";
    let verificationCodeError = "";

    // Email validation
    const emailPattern = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if (!emailPattern.test(formValues.email)) {
      emailError = "Invalid email address";
    }

    // Verification code validation
    if (formValues.verificationCode.trim() === "") {
      verificationCodeError = "Verification code is required";
    }

    if (emailError || verificationCodeError) {
      setFormErrors({
        email: emailError,
        verificationCode: verificationCodeError,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      // Proceed with form submission or API call
      console.log("Form Submitted Successfully");
    }
  };

  return (
    <div className="forgot-password">
      <h4>Password Recovery</h4>
      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="email">Enter Your Email</label>
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
        <br />

        <label htmlFor="verificationCode">Enter Verification Code</label>
        <input
          type="text"
          name="verificationCode"
          value={formValues.verificationCode}
          onChange={handleInputChange}
          className={formErrors.verificationCode ? "error-input" : ""}
          required
        />
        {formErrors.verificationCode && (
          <span className="error-message">
            {formErrors.verificationCode}
          </span>
        )}
        <br />

        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Back to Login</Link>
    </div>
  );
};

export default Forgot;
