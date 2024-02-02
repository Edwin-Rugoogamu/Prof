import React from 'react';
import style from "./Events.module.css"
import NavBar from '../NavBar/NavBar';
import FeaturedEvents from './FeaturedEvents';
import FutureEvents from './FutureEvents';
import PastEvents from './PastEvents';
import Footer from '../Footer/Footer';

function Events(props) {
    return (
        
        <div className={style.main2}>
         <div><NavBar/></div>
          <div className={style.main}> <h1 className={style.h1}>EVENTS</h1></div>
          <div><FeaturedEvents/></div> 
          {/* <div><FutureEvents/></div> */}
          {/* <div><PastEvents/></div> */}
          <div><Footer/></div>
        </div>
    );
}

export default Events;