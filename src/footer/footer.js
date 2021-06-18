import React from "react";
import logoIcon from '../assets/images/logo-icon.png'
import linkedInLogo from "../assets/images/linkedin.png"
import './footer.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default () => {
  return (
    <div className={"footer-container"}>
        <div className={"footer-text-container"}>
          <h4 className={"footer-text-left"}>
            INITIATIVES 
          </h4>
          <h4 className={"footer-text-right"}>
            CURRENT FUNDRAISING
          </h4>
        </div>
        <div className={"footer-text-container"}>
          <h4 className={"footer-text-left"}>
            ABOUT US
          </h4>
          <h4 className={"footer-text-right"}>
            COMMUNITY 
          </h4>
          <h4 className={"footer-text-right"}>
            TEAM
          </h4>
        </div>
        <div className={"footer-bottom-container"}>
          <div className={"footer-bottom-text-container"}>
            <img src={logoIcon} className={"footer-icon"}/>
            <span className={"footer-bottom-text"}>
              One World One Community © 2021
            </span>
            <span className={"footer-bottom-text"}>
              Terms and Conditions
            </span>
            <span className={"footer-bottom-text"}>
              Privacy Policy
            </span>
          </div>
          <img src={linkedInLogo} className={"footer-bottom-linkedin"}/>
        </div>
    </div>
  )
}