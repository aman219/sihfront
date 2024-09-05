
import React from 'react';
import '../styles/userProfile.css'; // Assume we're using an external CSS file


const UserProfile = () => {
  const user = {
    email: "ap6262997@gmail.com",
    phoneNumber: "9450289805",
    gender: "male",
    profilePhoto: "https://cdn-icons-png.flaticon.com/512/9187/9187604.png",
    role: "Software Engineering",
    department: "Land and Development Office", // Updated to show department name
  };
  
  
  
    return (
      <div className="profile-container">
        <div className="profile-header">
          <img
            src={user.profilePhoto ? user.profilePhoto : '/default-profile.png'}
            alt="Profile"
            className="profile-photo"
          />
          <h2>{user.role}</h2>
          <p className="email">{user.email}</p>
        </div>
  
        <div className="profile-details">
          <div className="detail-item">
            <span className="detail-label">Phone Number:</span>
            <span>{user.phoneNumber}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Gender:</span>
            <span>{user.gender}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Department:</span>
            <span>{user.department}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserProfile;
  