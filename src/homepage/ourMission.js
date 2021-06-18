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
        Donations fund the education and quality of life for the students in our community. Follow along to see how you can make a meaningful impact.
      </h1>
      <div className={"homepage-mission-body-container"}>
        <div>
          <span className={"homepage-mission-text-underline"}>
            OUR MISSION
          </span>
          <p className={"homepage-mission-body-text"}>
            Supporting the dreams of under-privileged youth around the world, helping raise them to their full potential through the funding of their education and improvements to their quality of life. In addition to supporting underprivileged youth, OWOC aims to create leadership opportunities for Canadian highschool and university undergraduate and postgraduate students. Thus, OWOC’s donations come from fundraising initiatives organized by canadian students, connecting them to their global peers and helping them build communication, teamwork, creative thinking and problem solving skills. <br/><br/>We believe that the world is one community and wants to empower youth to uplift their peers across the globe.
          </p>
        </div>
        <img src={ourMission} className={"homepage-mission-image"}/>
      </div>
    </div>
  )
}