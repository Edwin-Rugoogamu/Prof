import React from "react";
import style from "./Heading.module.css";

function Heading(props) {
  return (
    <div className={style.main}>
      <div className="container" id={style.container}>
        <div className="row" id={style.row}>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
