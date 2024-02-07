import React from "react";
import Card from "react-bootstrap/Card";
import style from "./LatestLectures.module.css"

function LatestLectures(props) {
  return (
    <div className={style.main}>
  
        
  
        <div className="container-fluid" id={style.container}>
        <h4 className={style.h4}> Lecture</h4>
        <div className="row">
          <div className="col">
            <img src="/images/Prof JT Memorial Lecture Poster 4.png" alt="" id={style.img} />
          </div>
          <div
            className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
            id={style.col}
          >
            <h5 className={style.h}> Annual Memorial Lecture in conjunction with Uganda Pentecostal University</h5>
            
             <h5 className={style.h}>Speakers</h5>
             <p className={style.p4}>
         <li>lorem2</li>
         <li>lorem2</li>
         <li>lorem2</li>
             </p>  
             <button className={style.button}>Watch</button>           
             
          </div>
        </div>
      </div>
           
          </div>
       
        
      

      
      
     
    
  );
}

export default LatestLectures;
