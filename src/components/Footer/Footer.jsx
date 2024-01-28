import React from "react";
import style from "./Footer.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <div className="row">
        
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <h4 className={style.h4}>About Us</h4>
            <p>
              The John Ntambirweki Foundation is a nonprofit organization
              dedicated to the indelible legacy of Prof. John Ntambirweki in the
              education sector in East Africa 
             
            </p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <h4 className={style.h4}>Core Principles</h4>
            <p>
             <ul>
              <li>
                Empower
              </li>
              <li>
                Elevate
              </li>
              <li>
                Engage
              </li>
              <li>
                Educate
              </li>
             </ul>
             
            </p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <h4 className={style.h4}>Address </h4>
            <p>
              <FaPhoneAlt className={style.icon} />
            </p>
            <p>
              <MdEmail className={style.icon} />
            </p>
            <p>
              <FaWhatsapp className={style.icon} />
            </p>
            <p>
              <FaLocationDot className={style.icon} />
            </p>
          
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <h4 className={style.h4}>Get In Touch </h4>
            
          
            <label className={style.label}>
              <FaLinkedin className={style.icon2} />
            </label>
            <label className={style.label}>
              <FaTwitter className={style.icon2} />
            </label>
            <label className={style.label}>
              <FaYoutube className={style.icon2} />
            </label>
            <Link to="/donate">   <button className={style.donateButton}>
         <FaDonate className={style.accountIcon} />
          DONATE
        </button></Link>
          
          </div>
        </div>
      </div>
   
      {/* container */}
      <div className="container-fluid" id={style.container3}>
        <div className="row">
          <div className="col"></div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10"> 
          <FaCopyright /> CopyRight Made By Edwin Rugoogamu
         </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
