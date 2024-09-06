import React from 'react'
import '../styles/home.css'
import Header from './Header'
import Notification from './Notification'
import ParticleRing from './ParticleRing'
import Card from './Card'

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
