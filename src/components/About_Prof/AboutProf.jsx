import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Heading from "./Heading";
import About from "./About";

function AboutProf(props) {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <Heading />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AboutProf;
