import React from 'react'
import '../styles/home.css'
import Header from './Header'
import Notification from './Notification'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home' >
      <Header />
      <Notification /> 
      <Link to='login/'> Login </Link>
      <Link to='signup/'> Singup </Link>
      <Link to='resource/'>Resource</Link>
      <Link to='addproject/'>AddProject</Link>
      <Link to='project/timeline/'>Timeline</Link>
    </div>
  )
}

export default Home
