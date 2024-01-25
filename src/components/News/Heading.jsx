import React from "react";
import style from "./Heading.module.css";

function Heading(props) {
  return (
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <h1 className={style.h1}>JT FOUNDATION NEWS</h1>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div id={style.col}>Left</div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div id={style.col1}>
                    <img src="images/Blackground.jpg" alt=""  className={style.img}/>
                    {/* <p className={style.p}>Come home Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, nam?</p> */}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div id={style.col1}> div</div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div id={style.col1}> div</div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6">
                  <div id={style.col1}> div</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
