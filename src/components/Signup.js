import React from "react";
import { Link } from "react-router-dom";

import "../styles/signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <h4> Create an account </h4>
      <form method="post">
        <div className="form-group">
          <label htmlFor="firstName"> First Name </label>
          <input type="text" name="firstName" required /> <br />
        </div>
        <div className="form-group">
          <label htmlFor="lastName"> Last Name </label>
          <input type="text" name="lastName" required /> <br />
        </div>
        <div className="form-group">
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" required /> <br />
        </div>
        <div className="form-group">
          <label htmlFor="phone number"> Phone Number </label>
          <input type="text" name="Phone Number" required /> <br />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth"> Date of Birth </label>
          <input type="date" name="dateOfBirth" required /> <br />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfJoin"> Joining Date </label>
          <input type="date" name="dateOfJoin" required /> <br />
        </div>
        <div className="form-group">
          <label htmlFor="departments"> Select Department </label>
          <select id="departments" name="departments">
          <option value="" disabled selected>Select Department</option>
            <option value="publicWorkDepartment">Public Work Department</option>
            <option value="landAndDevlopmentOffice">
              Land And Development Office
            </option>
            <option value="nationalBuildingsOrganisation">
              National Buildings Organisation
            </option>
            <option value="townandCountryPlanningOrganisation">
              Town and Country Planning Organisation
            </option>
            <option value="waterSupplyDepartment">
              Water Supply Department
            </option>
            <option value="electricalDepartment">Electrical Department</option>
            <option value="forestDepartment">Froest Department</option>
            <option value="privateOrganisations">Private Organisations</option>
          </select>{" "}
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="profilePicture"> Profile Picture </label>
          <input type="file" accept="image/*"></input> <br />
        </div>
        <div className="form-group">
          <label htmlFor="password"> Password </label>
          <input type="password" name="password" required /> <br />
        </div>
        <div className="form-group">
          <label htmlFor="cPassword"> Confirm Password </label>
          <input type="password" name="cPassword" required /> <br />
        </div>
        <div className="form-group">
          <label htmlFor="Gender"> Gender </label>
          <select id="Gender" name="Gender" required>
          <option value="" disabled selected>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">
              Female
            </option>
            </select>{" "}
            </div>
        <input type="submit" value="Create an account" />
      </form>
      <span className="login-prompt">
        {" "}
        Have already an account?<Link to="/login"> Login here</Link>
      </span>
    </div>
  );
};

export default Signup;
