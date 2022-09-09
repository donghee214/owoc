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
      title: "A student joins OWOC",
      description: "OWOC works with local schools and public welfare services to identify underprivileged students that need support in order to thrive in their education and pursue their dreams."
    },
    {
      imgSrc: hiw2,
      title: "Get to know the student in need",
      description: "Through discussions with the students and their families, OWOC works with public welfare services and/or the student’s school to determine how best to support the student’s needs."
    },
    {
      imgSrc: hiw3,
      title: "Fundraise", 
      description: "Canadian students raise donations via organizing fundraising initiatives",
    },
    {
      imgSrc: hiw4,
      title: "Student Support is Delivered ",
      description: "Donations from various fundraising events are consolidated and used to buy provisions for the underprivileged students based on the needs assessment conducted of their circumstances. \n We want you to know how your donations have impacted the lives of these students so our website and social media will be updated after each of these large scale donations."
    }]

  return(
    <div className="how-it-works-container">
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