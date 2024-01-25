import React from 'react';
import style from "./About3.module.css"

function About3(props) {
    return (
        <div className={style.main}>
        <div className="container-fluid" id={style.container} >
          <div className="row">
            <div className="col">
              <h4 className={style.h4} >Lorem ipsum black is the best.</h4>
              <p  className={style.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi recusandae veritatis placeat quam corporis! Recusandae eaque aperiam inventore eos magnam. Fuga voluptatum, commodi unde quis, nobis iste consequatur, vitae nisi sunt inventore itaque reiciendis! Enim culpa dolorem at labore eius!</p>
              <p  className={style.p2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis molestiae necessitatibus, alias consequatur aut repudiandae sint incidunt suscipit nostrum adipisci! Illum itaque accusamus, ullam laudantium aperiam voluptatum, nam facere vero necessitatibus voluptate exercitationem. Debitis impedit amet illo. Nostrum repudiandae dicta dolores. Atque dicta ut quia sint ducimus amet quibusdam? Ipsa dolorum fugit laboriosam, doloremque rerum commodi aliquid culpa! Hic, natus!</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About3;