import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/signup.css'

const Signup = () => {
  return (
    <div className='signup' >
      <h4> Create a account </h4>
      <form method='post' >
        <label htmlFor='firstName'> First Name </label>
        <input type='text' name='firstName' required /> <br />
        <label htmlFor='lastName'> Last Name </label>
        <input type='text' name='lastName' required /> <br />
        <label htmlFor='email'> Email </label>
        <input type='email' name='email' required /> <br />

        <label htmlFor='dateOfBirth'> Date of Birth </label>
        <input type='date' name='dateOfBirth' required /> <br />
        <label htmlFor='dateOfJoin'> Joining Date </label>
        <input type='date' name='dateOfJoin' required /> <br />

        <label htmlFor='departments'> Select Department </label>
        <select id='departments' name='departments'>
            <option value='publicWorkDepartment'>Public Work Department</option>
            <option value='landAndDevlopmentOffice'>Land And Development Office</option>
            <option value='nationalBuildingsOrganisation'>National Buildings Organisation</option>
            <option value='townandCountryPlanningOrganisation'>Town and Country Planning Organisation</option>
            <option value='waterSupplyDepartment'>Water Supply Department</option>
            <option value='electricalDepartment'>Electrical Department</option>
            <option value='forestDepartment'>Froest Department</option>
            <option value='privateOrganisations'>Private Organisations</option>
        </select> <br />

        <label htmlFor='profilePicture'> Profile Picture </label>
        <input type='file' accept='image/*' ></input> <br />


        <label htmlFor='password'> Password </label>
        <input type='password' name='password' required /> <br />
        <label htmlFor='cPassword'> Confirm Password </label>
        <input type='password' name='cPassword' required /> <br />

        <input type='submit' value='Create' />
      </form>
      <Link to='/login'> Already have account? loing... </Link>
    </div>
  )
}

export default Signup
