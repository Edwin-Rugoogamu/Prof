import React from "react";
import style from "./FutureEvents.module.css";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";

function FutureEvents(props) {
  const vidUrl = "https://youtu.be/djT5HHcTk10?si=rS1xPvG669iuIqgJ";
  return (
    <div className={style.main}>
      <div className="container-fluid" id={style.container}>
        <h4 className={style.h4}>Future Events</h4>
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col}
          >
            {" "}
            <Card style={{ width: "100%" }} id={style.card}>
              <ReactPlayer
                url={vidUrl}
                playing={false}
                volume={0.5}
                width="100%"
                height={500}
                style={{ borderRadius: "10px" }}
              />
              <Card.Body>
                <Card.Title>Quarter One </Card.Title>
                <Card.Text>
                  Annual Memorial Lecture in conjunction with Uganda Pentecostal
                  University
                </Card.Text>
                <Card.Text>date</Card.Text>
              </Card.Body>
            </Card>
          </div>
         
        
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col}
          >
            {" "}
            <Card style={{ width: "100%" }} id={style.card}>
              <ReactPlayer
                url={vidUrl}
                playing={false}
                volume={0.5}
                width="100%"
                height={500}
                style={{ borderRadius: "10px" }}
              />
              <Card.Body>
                <Card.Title>	Quarter Four</Card.Title>
                <Card.Text>
                Tree Planting Exercise 
                </Card.Text>
                <Card.Text>date</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureEvents;
