import React from "react";
import style from "./Gallery.module.css";
import Carousel from "react-bootstrap/Carousel";
import { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";


function Gallery(props) {
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

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const targetRef = useRef();

  return (
    <div className={style.main} ref={targetRef}>
      <motion.h4
        className={style.gallery}
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
      <button className={style.button}> <Link id={style.link} to="/gallery">Gallery</Link></button>
      </motion.h4>
      <Carousel
        data-bs-theme="dark"
        controls={false}
        indicators={false}
      >
        <Carousel.Item>
          <div className="container-fluid" id={style.container}>
            <div className="row" id={style.row}>
              <div className="col" id={style.col}>
                <div id={style.imgDiv}>
                  {" "}
                  <img src="" alt="yaa" id={style.img} />
                </div>
              </div>
              <div className="col" id={style.col2}>
                <div id={style.imgDiv}>
                  {" "}
                  <img src="" alt="yaa" id={style.img} />
                </div>
              </div>
              <div className="col" id={style.col3}>
                <div id={style.imgDiv}>
                  {" "}
                  <img src="" alt="yaa" id={style.img} />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid" id={style.container}>
            <div className="row" id={style.row}>
              <div className="col" id={style.col}>
                <div id={style.imgDiv}>
                  {" "}
                  <img src="" alt="yaa" id={style.img} />
                </div>
              </div>
              <div className="col" id={style.col2}>
                <div id={style.imgDiv}>
                  {" "}
                  <img src="" alt="yaa" id={style.img} />
                </div>
              </div>
              <div className="col" id={style.col3}>
                <div id={style.imgDiv}>
                  {" "}
                  <img src="" alt="yaa" id={style.img} />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="container-fluid" id={style.container}>
            <div className="row" id={style.row}>
              <div className="col" id={style.col2}>
                <div id={style.imgDiv}>
                  {" "}
                  <img src="" alt="yaa" id={style.img} />
                </div>
              </div>
              <div className="col" id={style.col3}>
                <div id={style.imgDiv}>
                  {" "}
                  <img src="" alt="yaa" id={style.img} />
                </div>
              </div>
              <div className="col" id={style.col}>
                <div id={style.imgDiv}>
                  {" "}
                  <img src="" alt="yaa" id={style.img} />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Gallery;
