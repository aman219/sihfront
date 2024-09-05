import React from 'react'
import '../styles/home.css'
import Header from './Header'
import Notification from './Notification'
import Departments from './Departments'
import UserProfile from './UserProfile'
import Project from './Project'
import Timeline from './Timeline'
import ParticleRing from './ParticleRing'
import Card from './Card'

import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home' >
      <Header />
      <Notification /> 
      
      <ParticleRing />
      <Card/>
    </div>
  )
}

export default Home
