import React from "react";
import style from "./Principles.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Principles(props) {
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
    <div>
      <motion.div
        className="container-fluid"
        id={style.container}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="row">
          <div className="col">
            <img src="/images/candle.jpg" alt="" id={style.img} />
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col}
          >
            <h5 className={style.h}>Core Principles</h5>
            <p className={style.p1}>
              <li> Empower </li>
              <li> Elevate </li>
              <li> Engage </li>
              <li>Educate </li>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Principles;
