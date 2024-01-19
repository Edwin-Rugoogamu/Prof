import React from "react";
import style from "./Foundation.module.css"

function Foundation(props) {
  return (
    <div className={style.main}>
      <div className="container" id={style.container}>
        <div className="row">
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
          <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12">
            <h5 className={style.h}>The Foundation</h5>
            <p className={style.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur velit, ipsam nisi magni, alias qui vitae unde consequatur officia eos cumque repellat! Esse, eveniet qui repellat iure iste expedita laudantium inventore placeat cumque adipisci voluptas laboriosam veritatis doloribus provident optio?</p>
            <p className={style.p2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt ullam ipsam, rerum dignissimos reprehenderit accusantium alias doloribus, est voluptas dolorum ea, ab architecto sit. Nam dolor voluptatem minus beatae minima soluta earum nihil qui aliquam veniam modi quo, aspernatur delectus quam et quibusdam eum porro laboriosam quod at tempora dolore. Quas alias fuga minima quisquam natus deleniti, incidunt eligendi earum? Nemo perspiciatis id voluptates assumenda a tempore dolorum asperiores excepturi, autem debitis qui iste officiis inventore ex accusamus voluptate!</p>
            <button className={style.button}>Directors</button>
          </div>
          <div className="col-xl-1 col-lg-1 col-md-1 col-sm-12 col-12"></div>
        </div>
      </div>
    </div>
  );
}

export default Foundation;
