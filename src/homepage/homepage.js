import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingCard from "./landingCard"
import OurMission from './ourMission'
import HowItWorks from './howItWorks'
import LearnMore from "../common/learnMore"

import "./homepage.css"


export default () => {
  return(
    <div className={"homepage-container"}>
      <LandingCard />
      <OurMission />
      <HowItWorks />
      <LearnMore nextTitle={"Current Fundraising Initiatives"} nextDescription={"OWOC is currently working on a number of fundraising initiatives. Please check out our current fundraising events page for more information."}/>
    </div>
  )
}