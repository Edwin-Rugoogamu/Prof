import React, { useEffect } from "react";
import style from "./Info.module.css";
import Carousel from "react-bootstrap/Carousel";
import Reason from "./Reason";
import {motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mission from "./Mission";
import News from "./News";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";

function Info(props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);


  
  return (
    <>
      <div id={style.container1}>
        {/* container one  Remembering Pro John*/}
        <div className="container-fluid">
          <div className="row" id={style.header}>
            <div
              className="col-xl-7 col-lg-8 col-md-8 col-sm-12 col-12"
              id={style.col}
            >
              <h5 className={style.heading}>
                Remembering PROF. JOHN NTAMBIRWEKI{" "}
              </h5>
              <h6 className={style.heading}> (1955-2023)</h6>
              <motion.h1
                className={style.h}
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                We are the official legacy organization of one of the most
                impactful lawyers and academics from Uganda.
              </motion.h1>
              <h6 className={style.hSecond}>
                {" "}
                Founded in 2023, The John Ntambirweki Foundation strives to
                preserve the legacy of Prof. John Ntambirweki.
              </h6>
              <button className={style.button2}>
                {" "}
                <Link to="/professor" className={style.explore}>
                  ABOUT PROF.JOHN NTAMBIRWEKI
                </Link>
              </button>
            </div>
            <div className="col " id={style.container}>
              <div id={style.containerpic}>
                {/* <img src="/images/landingPage2.jpg" alt="" id={style.containerpic} /> */}
              </div>
            </div>
          </div>
        </div>

        {/* container two  what we do */}
        <div className="container-fluid" id={style.i}>
          <div className="row" id={style.row}>
            <div className="col" id={style.img2}>
              <div id={style.img}>
                <img src="/images/IMG_5973.PNG" alt="" className={style.img} />
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-7" id={style.wedo}>
              <h6 className={style.weDo}>Who We Are </h6>
              <h3
                className={style.h3}
              
              >
                The John Ntambirweki Foundation is a nonprofit organization
                dedicated to the indelible legacy of Prof. John Ntambirweki in
                the education sector in East Africa and his contribution to
                international law and international environmental law.
              </h3>
              <h6 className={style.h6}>
                The Foundation is incorporated and registered under Ugandan law
                as John Ntambirweki Trust Limited, a company limited by
                guarantee.
              </h6>
              <button className={style.button}>
                {" "}
                <Link to="/about" className={style.explore}>
                  EXPLORE
                </Link>
              </button>
            </div>
          </div>
        </div>
        <Reason />
        {/* <Mission/> */}
        {/* <News/> */}
        {/* <Gallery/> */}
      </div>
    </>
  );
}

export default Info;
