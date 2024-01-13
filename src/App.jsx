import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './components/LandingPage.jsx/LandingPage';

function App() {


  return (
    <>
    <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}></Route>
                   
                </Routes>
            </Router>
      
    </>
  )
}

export default App
