import React from 'react';
import style from "./AboutUs.module.css"
import OurStory from './OurStory';
import NavBar from "../NavBar/NavBar"
import Foundation from './Foundation';
import About1 from './About1';
import Main from "./Main"
import Footer from '../Footer/Footer';

function AboutUs(props) {
    return (
        <div className={style.main}>
            <div><NavBar/></div>
            <div><OurStory/></div>
            <div><Foundation/></div>
            <div><Main/></div>
            <div><Footer/></div>
        </div>
    );
}

export default AboutUs;