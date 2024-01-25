import React from "react";
import style from "./FeaturedEvents.module.css";

function FeaturedEvents(props) {
  return (
    <div className={style.main}>
      <h4 className={style.h4} >Featured Events</h4>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id={style.col}>
            <img src="" alt="" className={style.img} />
          </div>
          <div className="col">
            <h5 className={style.h} >Lorem, ipsum.</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dignissimos officia repudiandae maxime nam dicta ullam tempora eveniet ea, corrupti facilis est, possimus eum repellat molestias aliquid. Voluptates, magnam libero asperiores neque est labore quaerat minus voluptas? Impedit repellendus ea sapiente, soluta voluptate fugiat fugit ipsa rem animi aut nobis obcaecati itaque iste dolorum? Laboriosam minus eaque quo est commodi inventore saepe necessitatibus repudiandae minima nobis harum deleniti consequatur error esse veniam facilis blanditiis voluptates facere id, consectetur nemo! Nam autem, alias, tempore quasi quo dolor fuga eos iusto ab distinctio totam eius harum quos magni pariatur provident labore itaque.</p>
            <button className={style.button}>ADD TO CALENDER</button>
            <button className={style.button}>WATCH</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedEvents;
