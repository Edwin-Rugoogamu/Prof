import React from "react";
import style from "./Reason.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Reason(props) {
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
      <motion.div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <h6 className={style.why}>WHY WE ARE HERE</h6>
            <motion.h1
              className={style.reason1}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ duration: 0.5 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </motion.h1>
            <p className={style.reason2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
              quibusdam, aspernatur assumenda, culpa odit ipsum et nihil quia
              magnam rerum consequatur incidunt architecto similique neque
              dolorem at ullam debitis vitae omnis! Corrupti veritatis nobis
              commodi nostrum tempore quasi dolores aspernatur?
            </p>
          </div>

          <motion.div
            className="col"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <img
              src="/images/pexels-dhivakaran-s-783200-removebg-preview.png"
              alt=""
              className={style.img}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Reason;
