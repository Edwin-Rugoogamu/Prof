import React from "react";
import style from "./SnapShot.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

function SnapShot(props) {
  return (
    <div className={style.main}>
      <NavBar/>
      <div className="container-fluid" id={style.container}>
        <h1 id={style.h1}>Snap Shot of Pro.John Ntambirweki's Career</h1>
        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
              2001 to 2023 <br></br> Vice Chancellor and Founder, Uganda
              Pentecostal University.
            </p>
          </div>
          <div className="col" id={style.col2}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>

        <div className="row" id={style.col}>
          <div className="col" id={style.col4}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
              • 1994 to 2003 - Senior Lecturer in Public Law, Faculty of Law,
              Makerere University.
            </p>
          </div>
        </div>

        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
              • 1989 to 2010 – Consultant in various capacities to UNEP, UNDP,
              IUCN / ELC, PAC, FAO, IFAD, UNICEF, UNECA, ACTS, GTZ, DANIDA,
              IDRC, Government of Uganda, East African Community, SIDA, NEMA, in
              the following countries: Uganda, Kenya, Tanzania, Zambia, Malawi,
              Zimbabwe, Mozambique, Namibia, South Africa, Gambia, Cameroon,
              Senegal, Nigeria, Ghana, Sierra Leonne, Egypt, Pakistan and
              Ethiopia.
            </p>
          </div>
          <div className="col" id={style.col5}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>

        <div className="row" id={style.col}>
          <div className="col" id={style.col4}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
               2000- Visiting professor of Environmental Law, McGeorge School
              of Law, University of the Pacific, Sacramento, California, USA
            </p>
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
            	1998 to 2000 – Head, Department of Law, Uganda Christian University Mukono
            </p>
          </div>
          <div className="col" id={style.col5}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col4}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
            	1989 to 1990 – Programme Officer, UNEP
            </p>
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
        	1987 to 1989 – Lecturer in Public Law, University of Nairobi
            </p>
          </div>
          <div className="col" id={style.col5}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col4}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
            1987 to 1991—Lecturer, University of Nairobi
            </p>
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
            	1981 to 1987 – Lecturer, Devonshire College of Accountancy
            </p>
          </div>
          <div className="col" id={style.col5}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col4}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
            	1980 to 1981 – Lecturer, Department of Marketing Uganda College of Commerce
            </p>
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
            	1980 to 1981 – Part time lecturer, Institute of Public Administration
            </p>
          </div>
          <div className="col" id={style.col5}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col4}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
            	1979 to 1980 – Special Teaching Assistant, Makerere University
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default SnapShot;
