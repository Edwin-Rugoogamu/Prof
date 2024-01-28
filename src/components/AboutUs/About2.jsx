import React from "react";
import style from "./About2.module.css";

function About2(props) {
  return (
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <div className="row">
          <div className="col">
            <h4 className={style.h4}>
              We dream of a society where every East African has access to
              higher education and where threats to biodiversity in the African
              ecosystem are managed adequately.
            </h4>
            <p className={style.p1}>
              • To facilitate continuing education for sections of the community
              in Uganda and worldwide. • To promote capacity building in
              students and the total development of liberal and scientific
              educational programmes. • To participate in the presentation,
              transmission and propagation of intellectual activity and
              development in Uganda. • To facilitate research in natural
              resources and the environment generally for sustainable
              development. • To undertake, initiate, support or otherwise effect
              consultancy work, management services and market research in any
              field or specialty of knowledge or professional practice or
              enterprise and to sponsor, subsidise, endorse or recommend
              research or special project assignments or undertakings. • To
              campaign for and or accept endowments, donations or assistance in
              kind, including bequests and legacies for facilitating the
              Foundation to successfully develop or carry out its activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
