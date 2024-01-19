import React from "react";
import style from "./OurStory.module.css";

function OurStory(props) { 
  return (
    <div>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12" id={style.col}>
            <h5 className={style.h}>This is Our Story</h5>
            <p className={style.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim at quis ea sequi recusandae consequatur nostrum suscipit, nesciunt tempora sit!</p>
            <p className={style.p2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam non magni debitis, aut facilis modi magnam maiores totam deserunt ipsam architecto provident! Et molestias aspernatur quasi nihil deserunt asperiores beatae, nobis distinctio veritatis laboriosam tenetur! Reiciendis voluptatum iure adipisci facilis?</p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
