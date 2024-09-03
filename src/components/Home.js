import React from 'react'
import '../styles/home.css'
import Header from './Header'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home' >
      <Header />
      <Link to='login/'> Login </Link>
      <Link to='signup/'> Singup </Link>
      <Link to='resource/'>Resource</Link>
      <Link to='addproject/'>AddProject</Link>
    </div>
  )
}

export default Home
