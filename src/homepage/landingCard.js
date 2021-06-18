import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import landingImage from '../assets/images/landingImage.png'

export default () => {
  return(
    <div className={"homepage-landing-container"}>
      <div className={"homepage-landing-title-container"}>
        <h1 className={"homepage-landing-title"}>
          Cultivating Communities To <span className={"homepage-landing-text-underline"}>Support Student Success</span>
        </h1>
        <h4 className={"homepage-landing-subtitle"}>
        Fund the education and improve the quality of life of children around the world.
        </h4>
      </div>
      <img src={landingImage} className={"homepage-landing-image"}/>
    </div>
  )
}