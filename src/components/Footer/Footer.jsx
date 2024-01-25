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

function Footer(props) {
  return (
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <div className="row">
        
          <div className="col">
            <h4 className={style.h4}>About Us</h4>
            <p>
              The John Ntambirweki Foundation is a nonprofit organization
              dedicated to the indelible legacy of Prof. John Ntambirweki in the
              education sector in East Africa and his contribution to
              international law and international environmental law.{" "}
            </p>
          </div>
          <div className="col">
            <h4 className={style.h4}>Mission</h4>
            <p>
              We dream of a society where every East African has access to
              higher education and where threats to biodiversity in the African
              ecosystem are managed adequately.
            </p>
          </div>
          <div className="col">
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
          <div className="col">
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
             <button className={style.donateButton}>
          <FaDonate className={style.accountIcon} />
          DONATE
        </button>
          </div>
        </div>
      </div>
   
      {/* container */}
      <div className="container-fluid" id={style.container3}>
        <div className="row">
          <div className="col"></div>
          <div className="col"> 
          <FaCopyright /> CopyRight Made By Edwin Rugoogamu
         </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
