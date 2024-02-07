import React from "react";
import style from "./About.module.css";
import { motion, useAnimation } from "framer-motion";

function About(props) {
  const controls = useAnimation();

  const variants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: "1%", opacity: 0 },
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const isVisible = scrollY > 10; // Adjust the scroll threshold as needed

    if (isVisible) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  };

  // Add event listener to handle scroll
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <h1 id={style.h1}>ABOUT PROF. JOHN NTAMBIRWEKI</h1>
        <div className="row" id={style.col7}>
          <div
            className="col-xl-12 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col3}
          >
            <p>
              Prof. John Ntambirweki (1955-2023) was a trailblazing, towering
              legal mind with an unmatched passion for the rule of law,
              environmental law, international law, and the education of young
              Ugandans, irrespective of their backgrounds. He fulfilled this
              passion with distinction, honesty, humility and generosity.
            </p>
          </div>
          {/* <div className="col" id={style.col2}> */}
          {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          {/* </div> */}
        </div>
        <motion.div
          className="row"
          id={style.col}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col3}
          >
            <p>
              Prof. Ntambirweki was born in 1955 to Erimonsi and Evangeline
              Ntambirweki in Kagongi, Kashaari District. <br></br>He attained
              his Ordinary School Certificate from Makobore High School,
              Kinyasano in Rukungiri District, which he attended between 1970
              and 1973.<br></br> He attained his Advanced School Certificate
              from Nabumali High School, Mbale District, which he attended
              between 1974 and 1975.
            </p>
          </div>
          <div className="col" id={style.col2}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </motion.div>

        <div className="row" id={style.col}>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col4}
          >
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
              In 1976, Prof. Ntambirweki joined Makerere University to undertake
              the Bachelor of Laws. He graduated in 1979 in the top 1% of his
              class, being one of four who obtained an Upper Second. His famous
              classmates include Hon Jim Muhwezi (who was also his roommate at
              Livingstone Hall), the late Simon Kagugube, the late Fred
              Karugonjo, Gen David Tinyefuuza Sejusa, General Kale Kayihura, and
              many other prominent lawyers serving in different capacities
              today.
            </p>
          </div>
        </div>

        <div className="row" id={style.col}>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col3}
          >
            <p>
              Upon completing his education of his Bachelor of Laws from
              Makerere (LLB), he was appointed a teaching assistant at Makerere
              University, Faculty of Law. In 1979, Prof. Ntambirweki joined the
              intelligence services under President Godfrey Binaisa. While
              serving government under President Binaisa, he was sent to Cuba
              for military training, where he led a group of 130 other
              individuals. While in Cuba, President Binaisa was overthrown, and
              he eventually returned to Uganda during the Obote II regime.
            </p>
          </div>
          <div className="col" id={style.col5}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>

        <div className="row" id={style.col}>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col4}
          >
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
              Due to intense political persecution after his return from Cuba,
              Prof. Ntambirweki fled to exile to Kenya in 1981. He was
              eventually joined by his Pelucy, who was then heavily pregnant
              with their first child, Barbara. In 1982, Prof. Ntambirweki he
              enrolled for his Master of Laws (LLM) at the University of
              Nairobi. In 1984, Prof. Ntambirweki along with his wife Pelucy and
              his two daughters Barbara and Brenda, fled to Canada due to
              ongoing political persecution of Ugandans in exile.
            </p>
          </div>
        </div>
        <div className="row" id={style.col}>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col3}
          >
            <p>
              In Canada, Prof. Ntambirweki enrolled for his doctorate at Queens
              University, Toronto Canada, but before he completed his doctorate,
              he was appointed a lecturer by the University of Nairobi. Prof.
              Ntambirweki chose to return to Kenya before the completion of his
              doctorate in 1987.
            </p>
          </div>
          <div className="col" id={style.col5}>
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>
        <div className="row" id={style.col}>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col4}
          >
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
              He temporarily joined the United Nations Environment Program,
              between 1989 and 1990, and then returned to the University of
              Nairobi as a full-time lecturer in 1990. He focused on teaching
              and international consultancies for UNEP, UNDP, IUCN / ELC, PAC,
              FAO, IFAD, UNICEF, UNECA, ACTS, GTZ, DANIDA, IDRC and many
              others..
            </p>
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
              At the end of 1991, Prof. Ntambirweki was appointed by Makerere
              University as a senior lecturer a position he held until 2004.
              During his time at Makerere he also founded the Department of Law
              at Uganda Christian University Mukono, and was the department’s
              inaugural head. In 1999, Prof. Ntambirweki completed his
              Postgraduate Diploma in Legal Practice at the Law Development
              Centre.
            </p>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col5}
          >
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>
        <div className="row" id={style.col}>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col4}
          >
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
              In 2001, Prof. Ntambirweki founded the Grotius School of Law, a
              private tertiary institution, which later became the Uganda
              Pentecostal University, in 2005. He was the head of the
              institution from its inception, until his demise in April 2022.
              Under his leadership and mentorship, thousands of East African
              youth attained university level education through an innovative
              bursary and scholarship scheme at the Uganda
              Pentecostal University.
            </p>
          </div>
        </div>
        <div className="row" id={style.col}>
          <div className="col" id={style.col3}>
            <p>
              Prof Ntambirweki is published in several journals and his research
              is considered by many to be the basis of many environmental laws
              globally. On several occasions he was invited as a visiting
              professor to universities such as the University of Virginia,
              Stanford, University of the Pacific, Sacramento and many others.
              He was an international consultant for UNEP, UNDP, IUCN / ELC,
              PAC, FAO, IFAD, UNICEF, UNECA, ACTS, GTZ, DANIDA, IDRC, Government
              of Uganda, East African Community, SIDA, NEMA, in the following
              countries: Uganda, Kenya, Tanzania, Zambia, Malawi,Zimbabwe,
              Mozambique, Namibia, South Africa, Gambia, Cameroon, Senegal,
              Nigeria, Ghana, Sierra Leonne, Egypt, Pakistan and Ethiopia.
            </p>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col5}
          >
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
        </div>
        <div className="row" id={style.col}>
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col4}
          >
            {/* <img src="public/images/JT-High-Res-1-2048x2048.png" alt="" id={style.img} /> */}
          </div>
          <div className="col" id={style.col3}>
            <p>
              Prof. Ntambirweki was an eminent scholar and educationist, who
              dedicated his life to the cause of higher education in Uganda. His
              relentless effort and immense contribution to the education sector
              has significantly impacted the lives of countless students,
              educators and the East African academic community as a whole. In
              the last 25 years of his short life, Prof. Ntambirweki dedicated
              his life to improving access to higher education for communities
              throughout East Africa and beyond. Prof. Ntambirweki left an
              indelible mark on everyone he encountered. His bubbly personality
              and sense of humour are greatly missed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
