import React from "react";
import style from "./Mission.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Mission(props) {
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
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col"></div>
          <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
            <h4 className={style.mission}>Mission</h4>
            <motion.h1
              className={style.mission2}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              deleniti voluptas repudiandae quo in dolores vel sed cumque! Optio
              repellendus voluptatem sapiente dolores praesentium velit
              blanditiis reprehenderit laudantium sint officia.
            </motion.h1>
            <h6 className={style.mission3}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
              sint nemo tempora magnam veritatis nesciunt sequi perspiciatis
              consequuntur rerum labore!
            </h6>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Mission;
