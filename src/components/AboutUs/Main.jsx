import React, { useEffect } from "react";
import style from "./Main.module.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function main(props) {
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {
  //   const routes = ["/about", "about2", "about3"];
  //   let currentIndex = routes.indexOf(location.pathname);

  //   const intervalId = setInterval(() => {
  //     // Calculate the next index (circular navigation)
  //     currentIndex = (currentIndex + 1) % routes.length;

  //     // Get the next route
  //     const nextRoute = routes[currentIndex];

  //     // Navigate to the next route
  //     navigate(nextRoute);
  //   }, 7000);

  //   // Cleanup the interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, [location, navigate]);
  
  return (
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col">
            <Link to="/about" className={style.h6}>
              <h3 className={style.h3}>Mission </h3>
            </Link>
          </div>
          <div className="col">
            <Link to="about2" className={style.h6}>
              <h3 className={style.h3}>Objectives </h3>
            </Link>
          </div>
          <div className="col">
            <Link to="about3" className={style.h6}>
              <h3 className={style.h3}>Career </h3>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default main;
