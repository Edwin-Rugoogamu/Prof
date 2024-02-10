import React from "react";
import style from "./About1.module.css";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About1(props) {
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
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col">
            <motion.h1
              className={style.h1}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              Our Objectives
            </motion.h1>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col}
          >
            
            <p className={style.p1}>
            To facilitate continuing education for sections of the community
            in Uganda and worldwide.
            </p>
            <p className={style.p}>
              <Link to="/objectives">
                <button className={style.button}>Read More</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
