import React from "react";
import style from "./FeaturedEvents.module.css";
// import { google } from "googleapis";
// import { OAuth2Client } from "google-auth-library";

function FeaturedEvents(props) {
  const gapi = window.gapi;
  const CLIENT_ID =
    "190435775552-st96id0vbmrmo90bj1hl5um56uks0m51.apps.googleusercontent.com";
  const API_KEY = "AIzaSyDiEX2P48H-qrxKXoPnY5r4f5ZJ3o3aPFU";
  const DISCOVERY_DOCS =
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest";
  const SCOPES = "https://www.googleapis.com/auth/calendar.events";

  const handleClick = () => {
    gapi.load("client:auth2", () => {
      console.log("loaded client");
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      });
      gapi.client.load("calender", "v3", () => console.log("bam"));
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          const event = {
            summary: "Event Title",
            description: "Event Description",
            start: {
              dateTime: "2024-01-25T10:00:00",
              timeZone: "Your_Time_Zone",
            },
            end: {
              dateTime: "2024-01-25T12:00:00",
              timeZone: "Your_Time_Zone",
            },
          };
          const request = gapi.client.calender.events.insert({
            calenderId: "primary",
            resource: event,
          });
          request.execute((event) => {
            window.open(event.htmlLink);
          });
        });
    });
  };

  return (
    <div className={style.main}>
    
      <div className="container-fluid" id={style.container}>
      <h4 className={style.h4}>Quarter One </h4>
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col}
          >
            <img src="/images/Prof JT Memorial Backdrop 5.png" alt="" className={style.img} />
          </div>
          <div className="col">
            <h5 className={style.h}>
              {" "}
              Annual Memorial Lecture in conjunction with Uganda Pentecostal
              University.
            </h5>
            <p>
     
             
            </p>
            <button className={style.button} onClick={handleClick}>
              ADD TO CALENDER
            </button>
            <button className={style.button}>WATCH</button>
          </div>
        </div>
      </div>
      
      <div className="container-fluid" id={style.container}>
      <h4 className={style.h4}>Quarter Two </h4>
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col}
          >
            <img src="/images/riverclean.png" alt="" className={style.img} />
          </div>
          <div className="col">
            <h5 className={style.h}>
              {" "}
              Annual Cleaning of the banks of River Mpanga in Kabarole District
              in conjunction with Uganda Pentecostal University and the local
              community
            </h5>
            <p>
            
             
            </p>
            <button className={style.button} onClick={handleClick}>
              ADD TO CALENDER
            </button>
            <button className={style.button}>WATCH</button>
          </div>
        </div>
      </div>
     
      <div className="container-fluid" id={style.container}>
      <h4 className={style.h4}>Quarter Three </h4>
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col}
          >
            <img src="/images/Footballtourna.png" alt="" className={style.img} />
          </div>
          <div className="col">
            <h5 className={style.h}>
              {" "}
               Annual Prof. John Ntambirweki Memorial Football
              Tournament involving footbal teams from the Western region or from
              other higher institutions of learning.
            </h5>
            <p>
   
             
            </p>
            <button className={style.button} onClick={handleClick}>
              ADD TO CALENDER
            </button>
            <button className={style.button}>WATCH</button>
          </div>
        </div>
      </div>
      
      <div className="container-fluid" id={style.container}>
      <h4 className={style.h4}>Quarter Four </h4>
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
            id={style.col}
          >
            <img src="/images/plantingtrees.png" alt="" className={style.img} />
          </div>
          <div className="col">
            <h5 className={style.h}>
              {" "}
              Tree Planting Exercise 
            </h5>
            <p>

             
            </p>
            <button className={style.button} onClick={handleClick}>
              ADD TO CALENDER
            </button>
            <button className={style.button}>WATCH</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedEvents;
