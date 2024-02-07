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
      <motion.div
        className={style.main}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <div className="container-fluid" id={style.container}>
          <div className="row">
            {/* <div className="col"></div> */}
            <div className="col">
              <div id={style.col}>
                <video
                  id={style.video}
                  src="videos/shoe-store 1.mp4"
                  width="100%"
                  height="100%"
                  volume={1}
                  controls
                ></video>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Reason;
