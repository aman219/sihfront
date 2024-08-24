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
          <input type='text' name='email' placeholder='email' required />
        </div>
        <div className='input-container'>
          <label htmlFor='password'> Password </label>
          <input type='password' name='password' placeholder='Password' required />
        </div>
        <div className='login-submit'>
          <input type='submit' value='Login' />
        </div>
      </form>
      <Link to='/signup'> Don't have account? signup... </Link>
    </div>
  )
}

export default Login
