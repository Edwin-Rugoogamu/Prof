import React from 'react';
import style from "./AboutUs.module.css"
import OurStory from './OurStory';
import NavBar from "../NavBar/NavBar"
import Foundation from './Foundation';

function AboutUs(props) {
    return (
        <div>
            <div><NavBar/></div>
            <div><OurStory/></div>
            <div><Foundation/></div>
        </div>
    );
}

export default AboutUs;