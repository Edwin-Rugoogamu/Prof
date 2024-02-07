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
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Footer(props) {
  return (
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <div className="row">
        
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <h4 className={style.h4}>About Us</h4>
            <p className={style.p} >
            The John Ntambirweki Foundation is a nonprofit organization dedicated to the indelible legacy of Prof. John Ntambirweki.  
             
            </p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <h4 className={style.h4}>Mission</h4>
            <p className={style.p}>
            We dream of a society where every East African has access to higher education and where threats to biodiversity in the African ecosystem are managed adequately.
             
            </p>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <h4 className={style.h4}>Address </h4>
            <p className={style.number}>
              
              <FaPhoneAlt className={style.icon} />&nbsp;
             <Link to="tel:+256752444228"  className={style.Link}> +256752444228</Link>,  
             <Link to="tel:+256772647796"  className={style.Link}> +256772647796</Link>,   
             {/* <Link to="tel:+256782223223"  className={style.Link}> +256782223223</Link>,  
             <Link to="tel:+256782300455"  className={style.Link}> +256782300455</Link>   */}

            </p>
            <p className={style.p}>
            
              <MdEmail className={style.icon} />
              <Link to="mailto:rugoogamuedwin5@gmail.com"></Link>
            </p>
           
            <p className={style.number}>
              <FaLocationDot className={style.icon} /> &nbsp;
              Prof. Ntambirweki Close, Buziga, Kampala, Uganda 

            </p>
          
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
            <h4 className={style.h4}>Get In Touch </h4>
            
          
            <label className={style.label}>
           <Link to="https://www.linkedin.com/company/ntambirwekiorg/" className={style.label}>  <FaLinkedin className={style.icon2} /></Link>  
            </label>
            <label className={style.label}>
             <Link to="https://x.com/ntambirwekiorg?s=11&t=2fm-ft55taU6jw_8LefSaw" className={style.label}> <FaTwitter className={style.icon2} /></Link> 
            </label>
            <label className={style.label}>
           <Link to="https://www.instagram.com/ntambirwekiorg?igsh=MWpvam1xanc0NDYyeg%3D%3D&utm_source=qr" className={style.label}>  <FaInstagramSquare className={style.icon2} /></Link> 
            </label>
            <label className={style.label}>
            <Link to="https://www.facebook.com/ntambirwekiorg?mibextid=LQQJ4d" className={style.label}><FaFacebook className={style.icon2} /></Link>
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
          <div className="col-xl-4 col-lg-4 col-md-5 col-sm-6 col-10" id={style.col}  > 
          <FaCopyright /> Prof John Ntambirweki Foundation
         </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
