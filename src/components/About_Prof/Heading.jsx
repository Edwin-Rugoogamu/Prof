import React from "react";
import style from "./Heading.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Heading(props) {
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
      <video autoPlay loop muted className={style.video}>
        <source src="/videos/video with students.mp4" type="video/mp4" />
      </video>

      <div className="container-fluid" id={style.container}>
        <div className="row">
          <motion.div
            className="col"
            id={style.col}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            Prof. John Ntambirweki <br></br>
            (1955-2023)
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
