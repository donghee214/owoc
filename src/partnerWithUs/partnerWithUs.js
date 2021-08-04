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
          Interested in joining our team or in contributing to the cause? Please reach out to us with your information at: <u><a href="mailto:oneworldonecommunity.owoc@gmail.com">oneworldonecommunity.owoc@gmail.com</a></u>
        </p>
        <p>
          You can also connect via social media on <u><a href="https://www.instagram.com/owoc.community/">Instagram</a></u>
        </p>
      </div>
      <img src={getInTouch} className={"partner-image"}/>
    </div>
  )
}