import React from "react";
import LearnMore from "../common/learnMore"
import floraDetail from "../assets/images/flora-detail.png"
import aliciaDetail from "../assets/images/alicia-detail.png"
import linkedInLogo from "../assets/images/linkedin.png"
import { useHistory, useLocation } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./teamMember.css"


export default () => {
  const query = new URLSearchParams(useLocation().search);
  const id = query.get("query")

  const members = [{
    name: "Flora Zhang",
    id: "flora",
    linkedInUri: "",
    title: "President",
    imgSrc: floraDetail,
    description: "Flora is a civil engineer passionate about community growth and improvement and believes that the world is one community that should help each other thrive and succeed. Through OWOC, Flora aims to help empower youth in developing communities around the world and to enable them achieve their dreams by providing the necessary resources and financial support."
  },
  {
    name: "Alicia Zheng",
    id: "alicia",
    linkedInUri: "",
    title: "Vice President",
    imgSrc: aliciaDetail,
    description: "Alicia is an accountant analyst and CPA candidate with a firm belief in providing developing communities with the long-term benefits of a right to education. As the VP of OWOC, Alicia is committed to achieving universal primary education, essential for continuous development in youth."
  }]

  const selectedMember = members.find((member) => member.id === id)
  
  return(
    <div className={"team-container"}>
      <div className={"team-member-top-bar"}>
        <Link className={"team-member-top-bar-back"} to="/meet-the-team">
          <h4 className={"team-member-top-bar-back-font"}>
            BACK TO TEAM
          </h4>
        </Link>
        <div className={"team-member-top-bar-members"}>
          {
            members.map((member) => (
              <Link to={`/team-members?query=${member.id}`}>
                <h4 className={`team-member-link ${id === member.id ? "team-member-underline" : ""}`}>
                  { member.name }
                </h4>
              </Link>
            ))
          }
        </div>
      </div>
      <div className={"team-member-details-container"}>
        <div className={"team-member-image-container-detail"}>
          <div className={"team-background-box"}>
            <img src={selectedMember.imgSrc} className={"team-member-image"}/>
          </div>
        </div>
        <div className={"team-member-description"}>
          <h1 className={"team-member-name-detail"}>
            { selectedMember.name }
          </h1>
          <h4 className={"team-member-title-detail"}>
            { selectedMember.title }
          </h4>
          <p>
            { selectedMember.description }
          </p>
          <Link to={selectedMember.linkedInUri}>
            <img src={linkedInLogo} className={"team-member-linkedIn"}/>
          </Link>
        </div>
      </div>  
      <LearnMore nextTitle={"Partner With Us"} nextDescription={"Work with us to provide a new level of transparency for a world of shared opportunity"} linkUri={"/partner-with-us"}/>
    </div>
  )
}
