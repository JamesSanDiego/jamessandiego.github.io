import './App.css';
import React, { useState } from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutMe from './pages/AboutMe';
import SkillSet from './pages/SkillSet';
import Project from './pages/Projects'; 
import ContactMe from './pages/ContactMe';
import Toggle from './components/ToggleMenu';
import MobileMenu from './components/MobileMenu';

function App() {

  //Use State Hook to Toggle
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  
  const handleMobileMenuToggle = () => {
    setMobileMenuToggle(!mobileMenuToggle);
  }

  return (
    <Router>
      <div>
        <Toggle handleMobileMenuToggle={handleMobileMenuToggle} />
        <NavBar />
        { mobileMenuToggle ? <MobileMenu handleMobileMenuToggle={handleMobileMenuToggle} /> : null}

        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutMe />} />
          <Route path='/skillset' element={<SkillSet />} />
          {/*<Route path='/projects' element={<Project />} /> */}
          <Route path='/contact' element={<ContactMe />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
