import React from "react";
import style from "./OurStory.module.css";

function OurStory(props) { 
  return (
    <div>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12" id={style.col}>
            <h5 className={style.h}>Who We Are (About the Foundation)</h5>
            <p className={style.p1}>The John Ntambirweki Foundation is a nonprofit organization dedicated to the indelible legacy of Prof. John Ntambirweki in the education sector in East Africa and his contribution to international law and international environmental law. </p>
            <p className={style.p2}>The Foundation is incorporated and registered under Ugandan law as John Ntambirweki Trust Limited, a company limited by guarantee. </p>
          </div>
          <div className="col">
            <img src="/images/photo-1607237138185-eedd9c632b0b.avif" alt=""  id={style.img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
