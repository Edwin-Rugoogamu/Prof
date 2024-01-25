import React from "react";
import style from "./Main.module.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

function main(props) {
  return (
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col">
          <Link to="/about" className={style.h6}><h6 >Mission </h6></Link>
          </div>
          <div className="col">
          <Link to="about2" className={style.h6}><h6 >Objective </h6></Link>
          </div>
          <div className="col">
          <Link to="about3" className={style.h6}><h6 >Ouotes </h6></Link>
          </div>
        
          
          
         
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default main;
