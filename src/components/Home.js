import React from "react";
import "../styles/home.css";
import Header from "./Header";
import Notification from "./Notification";
import Departments from "./Departments";
import UserProfile from "./UserProfile";
import Project from "./Project";
import Timeline from "./Timeline";
import ParticleRing from "./ParticleRing";
import Card from "./Card";
import Navbars from "./Navbar";

import AddResponse from "./AddResponse";
import { Link } from "react-router-dom";
import SvgAnimation from "./SvgAnimations";
import FeedbackForm  from "./Feedback";


const Home = () => {
  
  return (
    <div>
<Header />
 <ParticleRing />
      <Notification />
      <SvgAnimation />
     
     
    
<Link to="/addresponse">Add Response</Link>

      
    </div>
  );
};

export default Home;
