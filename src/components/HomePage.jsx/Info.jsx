import React,{ useEffect }  from "react";
import style from "./Info.module.css";
import Carousel from "react-bootstrap/Carousel";
import Reason from "./Reason";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Mission from "./Mission";
import News from "./News";
import Gallery from "./Gallery";

function Info(props) {

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
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return (
    <>
      <div id={style.container1}>
        {/* container one  Remembering Pro John*/}
        <div className="container-fluid">
          <div className="row" id={style.header}>
            <div
              className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12"
              id={style.col}
              
            >
              <h5 className={style.heading}>Remembering PROF. JOHN NTAMBIRWEKI </h5>
              <h6> (1955-2023)</h6>
              <motion.h1 className={style.h}ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.5 }}>
                We are the official legacy organisation of one of the world's
                most iconic leaders, and his life-long partner
              </motion.h1>
              <h6 className={style.hSecond}>
                {" "}
                Founded in --- ,The John Ntambirweki Foundation strives to
                preserve the legacy of the --, while taking their example into
                the future by growing and facilitating powerful and courages
                voice of uncompromised bravery in the world{" "}
              </h6>
            </div>
            <div className="col " id={style.container}>
              <div id={style.containerpic}></div>
            </div>
          </div>
        </div>

        {/* container two  what we do */}
        <div className="container-fluid" id={style.i}>
          <div className="row" id={style.row}>
            <div className="col" id={style.img2}>
              <div id={style.img}>
                <img src="" alt="" />
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-7 col-md-7"
                id={style.wedo}
            >
              <h6 className={style.weDo}>What we do</h6>
              <h3 className={style.h3}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                commodi qui saepe excepturi eligendi natus rerum voluptatum
                sequi nulla illum.
              </h3>
              <h6 className={style.h6}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                in veritatis sapiente vitae iure debitis molestias? A iusto
                cumque mollitia laborum accusamus, praesentium voluptatum illum,
                eligendi facilis dolor odit amet quidem rerum illo quasi tempore
                veritatis molestiae deserunt eius nobis fugiat ratione. Quae non
                fugiat commodi atque quas expedita libero!
              </h6>
              <button className={style.button}>EXPLORE</button>
            </div>
          </div>
        </div>
        <Reason />
        <Mission/>
        <News/>
        <Gallery/>
      </div>
    </>
  );
}

export default Info;
