import React from "react";
import style from "./Objectives.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function Objectives(props) {
  return (
    <div className={style.main}>
      <NavBar />
      <div className="container-fluid" id={style.container}>
        <h1 id={style.h1}>Objectives</h1>
        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
              • To facilitate continuing education for sections of the community
              in Uganda and worldwide.
            </p>
          </div>
          <div className="col"id={style.num2}>
            objective 1
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>

        <div className="row" id={style.col}>
        <div className="col"  id={style.num}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
            objective 2
          </div>
          <div className="col" id={style.col3}>
            <p>
              • To promote capacity building in students and the total
              development of liberal and scientific educational programmes.
            </p>
          </div>
        </div>

        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
              • To participate in the presentation, transmission and propagation
              of intellectual activity and development in Uganda.
            </p>
          </div>
          <div className="col"id={style.num2}>
            objective 3
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>

        <div className="row" id={style.col}>
        <div className="col"  id={style.num}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
            objective four
          </div>
          <div className="col" id={style.col3}>
            <p>
              • To facilitate research in natural resources and the environment
              generally for sustainable development.
            </p>
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
              • To undertake, initiate, support or otherwise effect consultancy
              work, management services and market research in any field or
              specialty of knowledge or professional practice or enterprise and
              to sponsor, subsidise, endorse or recommend research or special
              project assignments or undertakings.
            </p>
          </div>
          <div className="col"id={style.num2}>
            objective 4
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col"  id={style.num}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
            objective six
          </div>
          <div className="col" id={style.col3}>
            <p>
              • To campaign for and or accept endowments, donations or
              assistance in kind, including bequests and legacies for
              facilitating the Foundation to successfully develop or carry out
              its activities.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Objectives;
