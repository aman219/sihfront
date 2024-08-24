import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/login.css'

const Login = () => {
  return ( 
    <div className='login' >
      <h4> Login </h4>
      <form method='post' >
        <label htmlFor='username'> Username </label>
        <input type='text' name='username' required />
        <label htmlFor='password'> Password </label>
        <input type='password' name='password' required />
        <div className='login-submit'>
          <input type='submit' value='Login' />
        </div>
      </form>
      <Link to='/signup'> Don't have account? signup... </Link>
    </div>
  )
}

export default Login
