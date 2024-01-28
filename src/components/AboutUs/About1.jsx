import React from "react";
import style from "./About1.module.css";

function About1(props) {
  return (
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col">
            <h4 className={style.h4}> </h4>
            <p className={style.p1}>
              We dream of a society where every East African has access to
              higher education and where threats to biodiversity in the African
              ecosystem are managed adequately.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default About1;
