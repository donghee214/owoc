import React from "react";
import initiativesImage from "../assets/images/initiativesImage.png"
import LearnMore from "../common/learnMore"
import "./initiatives.css"


export default () => {
  const initiatives = [{
    title: "Mock Medical School Interviews",
    body: "OWOC is offering mock medical school interviews with current medical school students in Western University Schulich School of Medicine. The interviewers are currently in their clerkship year of study and have 2 years of experience conducting mock interviews. Mock interviews will include a debrief session after each mock with your assigned interviewer. Sign up before August 1st 2021 for the early bird price of $30/hour. After August 1st, prices go up to $40/hour.",
    mentorsLink: "",
    signupLink: "",
  },
  {
    title: "Medical School Coffee Chats",
    body: "OWOC is offering coffee chats with current medical students in Western University Schulich School of Medicine. The students are currently in their clerkship year of study and can provide insight on the application process and medical school experience. Sign up before August 1st 2021 for the early bird price of $10/30mins. After August 1st, prices go up to $15/30mins.",
    mentorsLink: "",
    signupLink: "",
  },
  {
    title: "Tech Industry Networking Coffee Chats",
    body: "OWOC is offering coffee chats with current SWEs from large tech companies including Google, Microsoft, Citadel, and Shopify. This is a great opportunity for students currently seeking internships and new grad opportunities to network and develop a better understanding of the industry and interview processes. Sign up before July 15th 2021 for the early bird price of $10/30mins. After July 15th, prices go up to $15/30mins.",
    mentorsLink: "",
    signupLink: "",
  },
  {
    title: "University Application Coffee Chats",
    body: "OWOC is offering high schoolers coffee chats with current and recently graduated university students from various accredited programs across Canada. Programs include but are not limited to Engineering, Commerce, Architecture, Interior Design, Life & Health Sciences from University of Toronto, University of Waterloo, Western University, McGill University, Queens University, and Ryerson University. Feel free to request programs and universities that are not on the list and we will do our best to find an appropriate mentor.",
    mentorsLink: "",
    signupLink: "",
  },
  {
    title: "Tutoring Fundraiser",
    body: "OWOC is offering english and math tutoring lessons to local Canadian students where 100% of lesson fees are donated to OWOC’s community of underprivileged youth. All of OWOC’s english teachers are very passionate about teaching and thave experience in working with students of all ages.",
    mentorsLink: "",
    signupLink: "",
  }]
  return(
    <div className={`initiatives-container`}>
      <img src={initiativesImage}/>
      <h1 className={"initiatives-title"}>
        Current Fundraising Initiatives
      </h1>
      <div className={"initiatives-all"}>
        {
          initiatives.map((initiative) => <InitiativesSection {...initiative}/>)
        }
      </div>
      <LearnMore nextTitle={"Meet The Community"} nextDescription={"Meet the underprivileged students currently supported by OWOC."}/>
    </div>
  )
}

const InitiativesSection = ({ title, body, mentorsLink, signupLink}) => (
  <div className={`initiatives-component initiatives-border-bottom`}>
    <h1 className={"initiatives-component-title"}>
      {title}
    </h1>
    <p>
      {body}
    </p>
    <p>
      Profiles of all mentors <a href={mentorsLink}>here</a>
    </p>
    <p>
      Please use the following link to sign up for a coffee chat <a href={signupLink}>here</a>
    </p>
  </div>
)