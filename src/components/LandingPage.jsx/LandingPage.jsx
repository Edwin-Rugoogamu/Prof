import React from 'react';
import style from "./LandingPage.module.css"
import NavBar from '../NavBar.jsx/NavBar';
import Info from '../AboutPage.jsx/Info';


function LandingPage(props) {
    return (
        <>
        <div><NavBar/></div>
        <div><Info/></div>
            
        </>
    );
}

export default LandingPage;