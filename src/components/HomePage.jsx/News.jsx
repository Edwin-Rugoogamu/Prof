import React from "react";
import style from "./News.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function News(props) {
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
      <h6 className={style.h6}>Latest News</h6>
      <motion.h1
        className={style.h1}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        Read the latest News
      </motion.h1>

      <div className="container-fluid" id={style.container}>
        <div className="row" id={style.row}>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col}>
            <div id={style.imgDiv}>
              {" "}
              <img src="" alt="yaa" id={style.img} />
            </div>
            <h6>date</h6>
            <h4>Title</h4>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col}>
            <div id={style.imgDiv}>
              {" "}
              <img src="" alt="yaa" id={style.img} />
            </div>
            <h6>date</h6>
            <h4>Title</h4>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col}>
            <div id={style.imgDiv}>
              {" "}
              <img src="" alt="yaa" id={style.img} />
            </div>
            <h6>date</h6>
            <h4>Title</h4>
          </div>
        </div>
        {/* <button className={style.button}>EXPLORE</button> */}
      </div>
    </div>
  );
}

export default News;
