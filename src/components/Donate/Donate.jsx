import React from "react";
import style from "./Donate.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { MdAccountBalance } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";

function Donate(props) {
  return (
    <div className={style.main} >
      <div>
        <NavBar />
      </div>

      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className={style.img2}>
              <img src="/images/candle.jpg" alt="" className={style.img} />
            </div>
          </div>
          <div className="col">
            <h1 id={style.h1}>Donate to JT Foundation </h1>
            <div className="container">
              <div className="row"id={style.row}>
               
                <div className="col" id={style.col}>
                    <h4><MdAccountBalance /> Bank Account</h4>
                    <p>Lorem, ipsum dolor.</p>

                    <h4> <FaPhoneAlt /> Phone Number</h4>
                    <p>+256775722637</p>

                    <h4> <FaPaypal />PayPal Account</h4>
                    <p>Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div><Footer/></div>
    </div>
  );
}

export default Donate;
