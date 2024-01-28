import React from 'react';
import style from "./Lectures.module.css"
import NavBar from '../NavBar/NavBar';
import Heading from './Heading';
import LatestLectures from './LatestLectures';
import PastLectures from './PastLectures';
import Footer from '../Footer/Footer';

function Lectures(props) {
    return (
        <div className={style.main}>
            <div><NavBar/></div>
            <div><Heading/></div>
            <div><LatestLectures/></div>
            {/* <div><PastLectures/></div> */}
            <div><Footer/></div>
        </div>
    );
}

export default Lectures;