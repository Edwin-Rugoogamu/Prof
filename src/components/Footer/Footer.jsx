import React from "react";
import style from "./Footer.module.css";

function Footer(props) {
  return (
    <div>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col">I'm your content inside the grid!</div>
          <div className="col">I'm your content inside the grid!</div>
          <div className="col">I'm your content inside the grid!</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
