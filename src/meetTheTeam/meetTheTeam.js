import React from "react";
import LearnMore from "../common/learnMore"
import Flora from "../assets/images/Flora.png"
import Alicia from "../assets/images/Alicia.png"

import { useHistory } from "react-router-dom";

import "./meetTheTeam.css"


export default () => {
  const execs = [{
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
    title: "Finance Exec",
    imgSrc: Alicia
  }]

  const members = [
    {
      name: "Justin Mulroney",
      id: "multoeny",
      linkedInUri: "",
      title: "Web Developer"
    },
    {
      name: "Dan Kim",
      id: "dan",
      linkedInUri: "",
      title: "Web Developer"
    }
  ]
  
  return(
    <div className={"team-container"}>
      <h1 className={"team-title"}>
        Meet The Execs
      </h1>
      <div className={"team-body-section"}>
        <div>
          <div className={"team-members-container"}>
            { execs.map((member) => <TeamMemberCard {...member}/>)}
          </div>
            <h1 className={"team-title"}>
            Meet The Members
          </h1>
          <div className={"regular-members-container"}>
            { members.map((member) => <MemberCard {...member}/>)}
          </div>
        </div>
        <div className="team-body-text-container">
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

const MemberCard = ({ name, title, id}) => {
  const history = useHistory();

  return(
    <div className={"team-member-container"} onClick={() => { history.push({
      pathname: "/team-members",
      search: `?query=${id}`
    })}}>
      <h3 className={"team-member-name"}>
        { name }
      </h3>
      <h4 className={"team-member-title"}>
        { title }
      </h4>
    </div>
)}