import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const user = useSelector(state => state.auth.user);
  return (
    <div className="dashboard" >
      <h4> Dashboard </h4>
      <Link to="/logout">Logout</Link>
      <h1> {user.firstName} </h1>
      <h1>{user.lastName}</h1>
    </div>
  )
}

export default Dashboard
