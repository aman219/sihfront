import React from 'react'
import '../styles/home.css'
import Header from './Header'
import Notification from './Notification'
import Departments from './Departments'
import UserProfile from './UserProfile'

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
      <Link to="departments/">Departments</Link>
      <Link to="userprofile/">UserProfile</Link>
    </div>
  )
}

export default Home
