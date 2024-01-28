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
              We dream of a society where every East African has access to
              higher education and where threats to biodiversity in the African
              ecosystem are managed adequately.
            </motion.h1>
            <h6 className={style.mission3}>
              {/* To facilitate continuing education for sections of the community
              in Uganda and worldwide.<br></br>
              To promote capacity building in students and the total development
              of liberal and scientific educational programmes.<br></br>
              To participate in the presentation, transmission and propagation
              of intellectual activity and development in Uganda. <br></br>To
              facilitate research in natural resources and the environment
              generally for sustainable development. */}
            </h6>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Mission;
