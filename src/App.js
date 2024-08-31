import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Forgot from './components/Forgot';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
import MessageBox from './components/MessageBox';


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
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
