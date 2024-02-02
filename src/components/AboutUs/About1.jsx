import React from "react";
import style from "./About1.module.css";
import { Link } from "react-router-dom";

function About1(props) {
  return (
    <div className={style.main}>
     <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col">
            <h1 className={style.h1}>Our Objectives</h1>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col}
          >
            <h5 className={style.h}>To...</h5>
            <p className={style.p1}>
            To facilitate continuing education for sections of the community in Uganda and worldwide.
            
             </p>
            <p className={style.p}>
           <Link to="/objectives"><button className={style.button}>Read More</button></Link> 

             </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
