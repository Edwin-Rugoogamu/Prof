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
            <img src="/images/IMG-20240204-WA0033.jpg" alt="" id={style.img} />
          </div>
          <div
            className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12"
            id={style.col}
          >
            <h5 className={style.h}>Core Principles</h5>
            <p className={style.p1}>
              <li> It is our mission to educate, empower and elevate the next generation of Africans in line with the sustainable development goals. 
 </li>
              <li> Through engaging directly with affected communities and stakeholders, we aim to increase access to higher and tertiary education. 
 </li>
              <li> It is also our goal to research and engage with communities and stakeholders on some of the biggest threats to biodiversity in our communities — such as environmental degradation, water scarcity and  food insecurity. </li>
          
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Principles;
