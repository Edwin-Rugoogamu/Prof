import React from "react";
import style from "./Heading.module.css";

function Heading(props) {
  return (
    <div className={style.main}>
      <video autoPlay loop muted playsInline className={style.video}>
        <source
          src="videos/We show you guys what it’s like inside the 70-metre-long Admont Abbey library in_Full-HD.mp4"
          type="video/mp4"
        />
      </video>

    
      <div className="container" id={style.container}>
        <div className="row"id={style.row} >
          <div className="col">I'm your content inside the grid!</div>
          <div className="col">I'm your content inside the grid!</div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
