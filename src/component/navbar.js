import React from "react";
import {BrowserRouter as Router, Routes, Route}   from 'react-router-dom';
import PageHome from '../pages/home';
import PageAbout from '../pages/about';


const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
        </ul>
      </div>
      <Router>
      <Routes>
          <Route path='/' element={<PageHome/>}/>
          <Route path='/About' element={<PageAbout/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default NavBar;