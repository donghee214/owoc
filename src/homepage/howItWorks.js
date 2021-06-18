import React from "react";
import ourMission from '../assets/images/ourMission.png'
import hiw1 from "../assets/images/hiw1.png"
import hiw2 from "../assets/images/hiw2.png"
import hiw3 from "../assets/images/hiw3.png"
import hiw4 from "../assets/images/hiw4.png"


export default () => {
  const cards = [
    {
      imgSrc: hiw1,
      title: "Meet a student in need",
      description: "Meet an underprivileged student whose life could be changed with a donation."
    },
    {
      imgSrc: hiw2,
      title: "The student joins OWOC",
      description: "The student is introduced to OWOC through the local government social services and/or the school board and is offered financial support."
    },
    {
      imgSrc: hiw3,
      title: "Fundraise", 
      description: "Canadian students raise donations via organizing fundraising initiatives",
    },
    {
      imgSrc: hiw4,
      title: "We keep you updated",
      description: "The student’s profile is updated after each donation, so you know how your donation impacted their life."
    }]

  return(
    <div>
      <span className={"homepage-mission-text-underline"}>
        HOW IT WORKS
      </span>
      <div className={"homepage-cards-container"}>
        {
          cards.map(card => <HowItWorksCard {...card}/>)
        }
      </div>
    </div>
  )
}

const HowItWorksCard = ({ title, description, imgSrc}) => (
  <div className={"homepage-card-container"}>
    <img src={imgSrc} className={"homepage-card-image"}/>
    <h4 className={"homepage-card-title"}>
      {title}
    </h4>
    <h4 className={"homepage-card-description"}>
      {description}
    </h4>
  </div>
)