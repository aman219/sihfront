import React from 'react'
import '../styles/home.css'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home' >
      <Link to='login/'> Login </Link>
      <Link to='signup/'> Singup </Link>
    </div>
  )
}

export default Home
