import React from "react";
import style from "./Principles.module.css";

function Principles(props) {
  return (
    <div>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col">
            <img src="/images/candle.jpg" alt="" id={style.img} />
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col}
          >
            <h5 className={style.h}>Core Principles</h5>
            <p className={style.p1}>
              <li> Empower </li>
              <li>  Elevate </li>
              <li> Engage </li>
              <li>Educate  </li>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principles;
