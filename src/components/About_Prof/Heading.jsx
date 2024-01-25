import React from "react";
import style from "./Heading.module.css";

function Heading(props) {
  return (
    <div className={style.main}>
      <video autoPlay loop muted playsInline className={style.video}>
        <source
          src="videos/shoe-store.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col">I'm your content inside the grid!</div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
