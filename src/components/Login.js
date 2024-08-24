import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/login.css'

const Login = () => {
  return ( 
    <div className='login' >
      <h4> Sign in </h4>
      <form method='post' >
        <div className='input-container'>
          <label htmlFor='email'> Email </label>
          <input type='text' name='email' placeholder='Email' required />
        </div>
        <div className='input-container'>
          <label htmlFor='password' id='passwordLabel'> Password </label>
          <input type='password' name='password' placeholder='Password' required />
        </div>
        <div className='login-submit'>
          <input type='submit' value='Login' />
        </div>
      </form>
      <span> Don't have account? &nbsp; <Link to='/signup'> Signup </Link> </span>
    </div>
  )
}

export default Login
