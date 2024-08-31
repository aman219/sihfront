import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import "../styles/signup.css";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    dateOfBirth: "",
    dateOfJoining: "",
    gender: "",
    role:"",
    department: "",
    profilePhoto: null,
    password: "",
    cPassword: "",
    
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    setFormErrors({});
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormValues({ ...formValues, profilePhoto: e.target.files[0] });
  };

  const dispatch = useDispatch();

  const validate = () => {
    const errors = {};

    // First Name validation
    if (formValues.firstName.length < 3) {
      errors.firstName = "First Name must be at least 3 characters long.";
    }

    // Email validation
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

    if (!emailRegex.test(formValues.email)) {
      errors.email = "Please enter a valid email address.";
    }

    // Phone Number validation
    let phoneNumber = formValues.phoneNumber.replace("+91", "").trim();
    if (phoneNumber.length !== 10 || isNaN(phoneNumber)) {
      errors.phoneNumber = "Phone Number must be 10 digits long.";
    }

    // Password validation
    if (formValues.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }

    // Confirm Password validation
    if (formValues.password !== formValues.cPassword) {
      errors.cPassword = "Passwords do not match.";
    }

    // Required fields validation
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key] && key !== "profilePhoto") {
        errors[key] = "This field is required.";
      }
    });

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const xhr = new XMLHttpRequest();
      const formData = new FormData(e.target);
      delete formData["cPassword"];
      xhr.open("POST", `${process.env.REACT_APP_SERVER}/employee/register`, true);
      xhr.send(formData);
      xhr.onload = () => {
        if (xhr.status === 200) {
          console.log(JSON.parse(xhr.response));
          dispatch({ type: 'message/setMessage', payload: { display: "", message: "Form submitted successfully"} });
          setFormValues({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            dateOfBirth: "",
            dateOfJoining: "",
            gender: "",
            role:"",
            department: "",
            profilePhoto: null,
            password: "",
            cPassword: "",
          })
          e.target.reset();
        } else {
          console.log(`Error code : ${xhr.status}`);
        }
      }
    } else {
      console.log("Form has errors", formErrors);
    }
  };

  return (
    <div className="signup">
      <h4>Create an account</h4>
      <form onSubmit={handleSubmit} encType="multipart/form-data" >
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
            className={formErrors.firstName ? "error" : ""}
            required
          />
          {formErrors.firstName && (
            <span className="error-message">{formErrors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
            required
          />
          {formErrors.lastName && (
            <span className="error-message">{formErrors.lastName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            className={formErrors.email ? "error" : ""}
            required
          />
          {formErrors.email && (
            <span className="error-message">{formErrors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleInputChange}
            className={formErrors.phoneNumber ? "error" : ""}
            required
          />
          {formErrors.phoneNumber && (
            <span className="error-message">{formErrors.phoneNumber}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formValues.dateOfBirth}
            onChange={handleInputChange}
            required
          />
          {formErrors.dateOfBirth && (
            <span className="error-message">{formErrors.dateOfBirth}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="dateOfJoin">Joining Date</label>
          <input
            type="date"
            name="dateOfJoining"
            value={formValues.dateOfJoin}
            onChange={handleInputChange}
            required
          />
          {formErrors.dateOfJoin && (
            <span className="error-message">{formErrors.dateOfJoin}</span>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formValues.gender}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {formErrors.gender && (
            <span className="error-message">{formErrors.gender}</span>
          )}
        </div>
        
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            name="role"
            value={formValues.Designation}
            onChange={handleInputChange}
            required
          />
          {formErrors.dateOfJoin && (
            <span className="error-message">{formErrors.designation}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="departments">Select Department</label>
          <select
            id="departments"
            name="department"
            value={formValues.department}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select Department
            </option>
            <option value="Public Work Department">Public Work Department</option>
            <option value="Land And Development Office">
              Land And Development Office
            </option>
            <option value="National Buildings Organisation">
              National Buildings Organisation
            </option>
            <option value="Town and Country Planning Organisation">
              Town and Country Planning Organisation
            </option>
            <option value="Water Supply Department">
              Water Supply Department
            </option>
            <option value="Electrical Department">
              Electrical Department
            </option>
            <option value="Forest Department">Forest Department</option>
            <option value="Private Organisations">
              Private Organisations
            </option>
          </select>
          {formErrors.departments && (
            <span className="error-message">{formErrors.departments}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
            type="file"
            name="profilePhoto"
            accept="image/*"
            onChange={handleFileChange}
          />
          {formErrors.profilePicture && (
            <span className="error-message">{formErrors.profilePicture}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            className={formErrors.password ? "error" : ""}
            required
          />
          {formErrors.password && (
            <span className="error-message">{formErrors.password}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="cPassword">Confirm Password</label>
          <input
            type="password"
            name="cPassword"
            value={formValues.cPassword}
            onChange={handleInputChange}
            className={formErrors.cPassword ? "error" : ""}
            required
          />
          {formErrors.cPassword && (
            <span className="error-message">{formErrors.cPassword}</span>
          )}
        </div>

       

        <input
          type="submit"
          value="Create an account"
          className={Object.keys(formErrors).length > 0 ? "disabled" : ""}
        />
      </form>
      <span className="login-prompt">
        Have already an account?
        <Link to="/login"> Login here</Link>
      </span>
    </div>
  );
};

export default Signup;
