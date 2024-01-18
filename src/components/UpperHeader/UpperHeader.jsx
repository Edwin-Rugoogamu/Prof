import React from "react";
import style from "./UpperHeader.module.css";

function UpperHeader(props) {
  return (
    <>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col">Prof John</div>
          <div className="col">Right column</div>
        </div>
      </div>
    </>
  );
}

export default UpperHeader;
