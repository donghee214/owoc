import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ourMission from '../assets/images/ourMission.png'

export default () => {
  return(
    <div className={"homepage-mission-container"}>
      <h1 className={"homepage-mission-title"}>
      Fund the education and improve the quality of life of underprivileged students in China
      </h1>
      <div className={"homepage-mission-body-container"}>
        <div>
          <span className={"homepage-mission-text-underline"}>
            OUR MISSION
          </span>
          <p className={"homepage-mission-body-text"}>
           OWOC’s mission is to support the dreams of underprivileged students in China as we believe students should have the right to fully pursue their dreams without constraints. We strive to raise these students to their full potential through the funding of their education and improvements to their quality of life. 
           <br />
           <br />
           In addition to supporting underprivileged Chinese students, OWOC aims to create leadership opportunities for Canadian highschool and university students. Thus, OWOC’s donations come from fundraising initiatives organized by Canadian students, connecting them to their global peers and helping them build communication, teamwork, creative thinking and problem solving skills. 
           <br />
           <br />
           We believe that the world is one community and wants to empower youth to uplift their peers across the globe.
          </p>
        </div>
        <img src={ourMission} className={"homepage-mission-image"}/>
      </div>
    </div>
  )
}