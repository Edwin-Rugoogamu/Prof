import React from "react";
import style from "./Donate.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { MdAccountBalance } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                    {/* <h4><MdAccountBalance /> Bank Account</h4>
                    <p>Lorem, ipsum dolor.</p> */}

                    <h4> <FaPhoneAlt /> Phone Numbers</h4>
                    <Link to="tel:+256752444228"  className={style.Link}> +256752444228</Link>,  <br></br> 
             <Link to="tel:+256772647796"  className={style.Link}> +256772647796</Link>,  <br></br>  
             <Link to="tel:+256782223223"  className={style.Link}> +256782223223</Link>,  <br></br>
             <Link to="tel:+256782300455"  className={style.Link}> +256782300455</Link>  
                   

                    {/* <h4> <FaPaypal />PayPal Account</h4>
                    <p>Lorem, ipsum dolor.</p> */}
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
