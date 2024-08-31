import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="dashboard" >
      <h4> Dashboard </h4>
      <Link to="/logout">Logout</Link>
    </div>
  )
}

export default Dashboard
