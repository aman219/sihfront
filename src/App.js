import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Forgot from './components/Forgot';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import MessageBox from './components/MessageBox';
import AddProject from './components/AddProject';
import Resource from './components/Resource';
import Project from './components/Project';
import Departments from './components/Departments';
import Timeline from "./components/Timeline"
import AddResponse from './components/AddResponse'
import SvgAnimation from './components/SvgAnimations';
import FeedbackForm from './components/Feedback';
import ImageSlider from './components/ImageSlider';


function App() {
  return (
    <div className="App">
      <MessageBox />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='dashboard/' element={<Dashboard />}></Route>
          <Route path='login/' element={<Login />}></Route>
          <Route path='logout/' element={<Logout />}></Route>
          <Route path='signup/' element={<Signup />}></Route>
          <Route path='forgot/' element={<Forgot/>}></Route>
          <Route path='addproject/' element={<AddProject />}></Route>
          <Route path='addresource/'element={<Resource />}></Route>
          <Route path='project/timeline/' element={<Timeline />}></Route>
          <Route path='project/' element={<Project />}></Route>
          <Route path='departments/' element={<Departments />}></Route>

          <Route path="imageslider/" element={<ImageSlider/>}></Route>
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
