import React from 'react';
import style from "./AboutUs.module.css"
import OurStory from './OurStory';
import NavBar from "../NavBar/NavBar"
import Foundation from './Foundation';
import About1 from './About1';
import Main from "./Main"
import Footer from '../Footer/Footer';
import Mission from '../HomePage.jsx/Mission';

import Principles from './Principles';

function AboutUs(props) {
    return (
        <div className={style.main}>
            <div><NavBar/></div>
            <div><OurStory/></div>
            <div><Principles/></div>
            {/* <div><Foundation/></div> */}
            <div><Mission/></div>
            <div><About1/></div>
            {/* <div><Main/></div> */}
            <div><Footer/></div>
        </div>
    );
}

export default AboutUs;