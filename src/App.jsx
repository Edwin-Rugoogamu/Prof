import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx/LandingPage";
import AboutUs from "./components/AboutUs/AboutUs";
import About1 from "./components/AboutUs/About1";
import About2 from "./components/AboutUs/About2";
import About3 from "./components/AboutUs/About3";
import Events from "./components/Events/Events";
import News from "./components/News/News";
import Donate from "./components/Donate/Donate";
import Lectures from "./components/Lectures/Lectures";
import AboutProf from "./components/About_Prof/AboutProf";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/about" element={<AboutUs />}>
            <Route path="/about" element={<About1 />}></Route>
            <Route path="about2" element={<About2 />}></Route>
            <Route path="about3" element={<About3 />}></Route>
          </Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/news" element={<News/>}></Route>
          <Route path="/donate"  element={<Donate/>}></Route>
          <Route path="/lectures"  element={<Lectures/>}></Route>
          <Route path="/professor"  element={<AboutProf/>}></Route>
          <Route path="/gallery"  element={<Gallery/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
