import React from "react";
import Card from "react-bootstrap/Card";
import style from "./LatestLectures.module.css"

function LatestLectures(props) {
  return (
    <div className={style.main}>
   <div className="container">
        <h4 className={style.h4}> Lectures</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem incidunt quae? Dolorum quaerat, cumque officiis ducimus facere pariatur id.</p>
        <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id={style.col} >
            {" "}
            <Card style={{ width: "100%" }} id={style.card}>
              <Card.Img variant="top" src="public/images/baby.webp" id={style.img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12" id={style.col} >
            {" "}
            <Card style={{ width: "100%" }} id={style.card}>
              <Card.Img variant="top" src="public/images/baby.webp" id={style.img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
       
        
      

      
        </div>
      </div>
    </div>
  );
}

export default LatestLectures;
