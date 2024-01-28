import React from "react";
import NavBar from "../NavBar/NavBar";
import style from "./Gallery.module.css";
import Footer from "../Footer/Footer";

function Gallery(props) {
  return (
    <div className={style.main}>
      <NavBar />
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col-xl-4 col-lg-4  col-md-4  col-sm-12 col-12"  id={style.col} >
            <div>
            <img src="images/JT-High-Res-1-2048x2048.png" alt="" className={style.img}/>
            </div>
            
          </div>
          <div className="col-xl-4 col-lg-4  col-md-4  col-sm-12 col-12"  id={style.col} >
            <div>
            <img src="images/JT-High-Res-1-2048x2048.png" alt="" className={style.img}/>
            </div>
            
          </div>
          <div className="col-xl-4 col-lg-4  col-md-4  col-sm-12 col-12"  id={style.col} >
            <div>
            <img src="images/JT-High-Res-1-2048x2048.png" alt="" className={style.img}/>
            </div>
            
          </div>
        
            
      
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
