import React from 'react';
import style from "./News.module.css"
import NavBar from '../NavBar/NavBar';
import Heading from './Heading';
import Body from './Body';
import LatestNews from './LatestNews';
import Footer from '../Footer/Footer';

function News(props) {
    return (
        <div>
            <div><NavBar/></div>
            <div><Heading/></div>
            <div><Body/></div>
             <div><LatestNews/></div>
             <div><Footer/></div>
        </div>
    );
}

export default News;