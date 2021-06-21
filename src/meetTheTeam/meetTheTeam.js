import React from "react";
import LearnMore from "../common/learnMore"
import Flora from "../assets/images/Flora.png"
import Alicia from "../assets/images/Alicia.png"
import { useHistory } from "react-router-dom";

import "./meetTheTeam.css"


export default () => {
  const members = [{
    name: "Flora Zhang",
    id: "flora",
    linkedInUri: "",
    title: "President",
    imgSrc: Flora
  },
  {
    name: "Alicia Zheng",
    id: "alicia",
    linkedInUri: "",
    title: "Vice President",
    imgSrc: Alicia
  }]
  
  return(
    <div className={"team-container"} onC>
      <h1 className={"team-title"}>
        Meet The Team
      </h1>
      <div className={"team-body-section"}>
        <div className={"team-members-container"}>
          { members.map((member) => <TeamMemberCard {...member}/>)}
        </div>
        <div>
          <p>
            OWOC’s team is dedicated to providing education opportunities for students around the world. Our goal is to empower the students with the support they need to ensure their potential is not held back by financial burdens. Even if it takes one student at a time, OWOC is committed to achieving this goal for anyone struggling to obtain the education they deserve.
          </p>
        </div>
      </div>
      <LearnMore
        nextTitle={"PARTNER WITH US"}
        nextDescription={"Work with us to provide a new level of transparency for a world of shared opportunity"} 
        linkUri={"/partner-with-us"}
      />
    </div>
  )
}


const TeamMemberCard = ({ imgSrc, name, title, id}) => {
  const history = useHistory();

  return(
    <div className={"team-member-container"} onClick={() => { history.push({
      pathname: "/team-members",
      search: `?query=${id}`
    })}}>
      <div className={"team-member-image-container"}>
        <img src={imgSrc} className={"team-member-image-main"}/>
      </div>
      <h3 className={"team-member-name"}>
        { name }
      </h3>
      <h4 className={"team-member-title"}>
        { title }
      </h4>
    </div>
)}