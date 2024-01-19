import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx/LandingPage';
import AboutUs from './components/AboutUs/AboutUs';

function App() {


  return (
    <>
    <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                    <Route path="/about" element={<AboutUs/>}></Route>
                   
                </Routes>
            </Router>
      
    </>
  )
}

export default App
