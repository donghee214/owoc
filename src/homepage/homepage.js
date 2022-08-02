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
      <LearnMore 
        nextTitle={"Donation Impact"}
        nextDescription={"Learn how we raise and use donations."}
        linkUri={"/donations"}
        />
    </div>
  )
}