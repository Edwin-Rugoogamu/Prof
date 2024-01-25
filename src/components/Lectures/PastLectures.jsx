import React from "react";
import style from "./PastLectures.module.css";
import Card from "react-bootstrap/Card";

function PastLectures(props) {
  return (
    <div className={style.main}>
   <div className="container">
        <h4>Past Lectures</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem incidunt quae? Dolorum quaerat, cumque officiis ducimus facere pariatur id.</p>
        <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col} >
            {" "}
            <Card style={{ width: "100%" }} id={style.card}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col} >
            {" "}
            <Card style={{ width: "100%" }} id={style.card}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col} >
            {" "}
            <Card style={{ width: "100%" }} id={style.card}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col} >
            {" "}
            <Card style={{ width: "100%" }} id={style.card}>
              <Card.Img variant="top" src="holder.js/100px180" />
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

export default PastLectures;
