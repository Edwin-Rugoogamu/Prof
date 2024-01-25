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
          <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div className={style.img2}>
              <img src="" alt="" />
            </div>
          </div>
          <div className="col">
            <h1 id={style.h1}>Donate to JT Foundation </h1>
            <div className="container">
              <div className="row"id={style.row}>
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  doloremque modi reprehenderit. Saepe sit illum numquam
                  obcaecati nesciunt porro ut eligendi asperiores? Pariatur unde
                  quos totam cupiditate aut. Iure facere quas excepturi natus
                  cumque odio dignissimos facilis corporis, dolorem
                  necessitatibus illo assumenda labore provident praesentium
                  laborum, expedita ipsa ducimus aspernatur voluptates odit.
                  Dolor explicabo vel earum error, quidem cum, architecto nulla
                  rerum natus fuga in quasi quia. Corporis, vero. Laboriosam,
                  perspiciatis praesentium dolorum ipsum molestias non porro
                  libero laborum quae ipsa quidem quas, vitae, sequi quasi! Eum
                  earum quod temporibus officia eligendi aspernatur, quisquam
                  commodi ab dolore molestias iure ea.
                </div>
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
