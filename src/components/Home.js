

import React from "react";
import "../styles/home.css";
import Header from "./Header";
import Notification from "./Notification";
import Departments from "./Departments";
import UserProfile from "./UserProfile";
import Project from "./Project";
import Timeline from "./Timeline";

import Card from "./Card";
import Navbars from "./Navbar";
import SvgAnimation from "./SvgAnimations";
import ImageSlider from "./ImageSlider";
import ParticleRing from "./ParticleRing";


const Home = () => {
  
  return (
    <div>
<Header />
 
      <Notification />
      <ParticleRing />
      <SvgAnimation />
   
    </div>
  );
};

export default Home;
