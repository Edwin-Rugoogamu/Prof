import React from "react";
import style from "./Heading.module.css";

function Heading(props) {
  return (
    <div className={style.main}>
      <video autoPlay loop muted className={style.video}>
        <source
          src="/videos/video with students.mp4"
          type="video/mp4"
        />
      </video>
 
      <div className="container-fluid" id={style.container}>
        <div className="row">
    
          <div className="col" id={style.col}>
            Prof. Ntambirweki  <br></br>
          (1955-2023)</div>
         
       
        </div>
      </div>
    </div>
  );
}

export default Heading;
