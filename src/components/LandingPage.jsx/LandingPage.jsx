import React from 'react';
import style from "./LandingPage.module.css"
import NavBar from '../NavBar/NavBar';
import Info from '../HomePage.jsx/Info';
import UpperHeader from '../UpperHeader/UpperHeader';
import Footer from '../Footer/Footer';


function LandingPage(props) {
    return (
        <>
        <div className={style.div}>
        {/* <div><UpperHeader/></div> */}
        <div><NavBar/></div>
        <div><Info/></div>
        <div><Footer/></div>
        </div>
        </>
    );
}

export default LandingPage;