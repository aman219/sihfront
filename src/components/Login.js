import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/login.css'

const Login = () => {
  return (
    <div className='login' >
      <h4> Login </h4>
      <form method='post' >
        <label htmlFor='username'> Username </label>
        <input type='text' name='username' required /> <br />
        <label htmlFor='password'> Password </label>
        <input type='password' name='password' required /> <br />
        <input type='submit' value='Login' />
      </form>
      <Link to='/signup'> Don't have account? signup... </Link>
    </div>
  )
}

export default Login
