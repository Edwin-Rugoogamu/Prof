import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx/LandingPage';
import AboutUs from './components/AboutUs/AboutUs';
import About1 from './components/AboutUs/About1';
import About2 from './components/AboutUs/About2';



function App() {


  return (
    <>
    <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/about" element={<AboutUs/>}>
                      <Route path="/about" element={<About1/>}></Route>
                      <Route path="about2" element={<About2/>}></Route>
                    </Route>
                   
                </Routes>
            </Router>
      
    </>
  )
}

export default App
