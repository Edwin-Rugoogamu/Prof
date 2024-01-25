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
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col}>
          {" "}
          <Card style={{ width: "100%" }} id={style.card}>
          <ReactPlayer
                url={vidUrl}
                playing={false}
                volume={0.5}
                width="100%"
                height={250}
              />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                date
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col}>
          {" "}
          <Card style={{ width: "100%" }} id={style.card}>
          <ReactPlayer
                url={vidUrl}
                playing={false}
                volume={0.5}
                width="100%"
                height={250}
              />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                date
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col}>
          {" "}
          <Card style={{ width: "100%" }} id={style.card}>
          <ReactPlayer
                url={vidUrl}
                playing={false}
                volume={0.5}
                width="100%"
                height={250}
              />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                date
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12" id={style.col}>
          {" "}
          <Card style={{ width: "100%" }} id={style.card}>
          <ReactPlayer
                url={vidUrl}
                playing={false}
                volume={0.5}
                width="100%"
                height={250}
              />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Text>
                date
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
       
        
       
       
      </div>
    </div>
  </div>
  );
}

export default FutureEvents;
