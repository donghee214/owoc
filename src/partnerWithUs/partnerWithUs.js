import React from "react";
import LearnMore from "../common/learnMore"
import getInTouch from "../assets/images/getInTouch.png"

import "./partnerWithUs.css"


export default () => {
  return(
    <div className={"partner-container"}>
      <div>
        <h1 className={"partner-form-title"}>
          Get In Touch
        </h1>
        <p>
          Interested in joining our team or in contributing to the cause? Fill out the form and we’ll be in touch soon.
        </p>
        <form>
          
        </form>
      </div>
      <img src={getInTouch} className={"partner-image"}/>
    </div>
  )
}