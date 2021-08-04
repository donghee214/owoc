import React from "react";
import logoIcon from '../assets/images/logo-icon.png'
import linkedInLogo from "../assets/images/linkedin.png"
import instagramLogo from "../assets/images/instagram.jpg"
import facebookLogo from "../assets/images/facebook.png"
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
          <Link to={"/initiatives"}>
            <h4 className={"footer-text-right"}>
              CURRENT FUNDRAISING
            </h4>
          </Link>
        </div>
        <div className={"footer-text-container"}>
          <h4 className={"footer-text-left"}>
            ABOUT US
          </h4>
          <Link to={"/meet-the-community"}>
            <h4 className={"footer-text-right"}>
              COMMUNITY 
            </h4>   
          </Link >
          <Link to={"/meet-the-team"}>
            <h4 className={"footer-text-right"}>
              TEAM
            </h4>
          </Link>

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
          <div>
            <img src={linkedInLogo} className={"footer-bottom-linkedin"}/>
            <a href="https://www.instagram.com/owoc.community/">
              <img src={instagramLogo} className={"footer-bottom-instagram"}/>
            </a>
            <img src={facebookLogo} className={"footer-bottom-facebook"}/>
          </div>
        </div>
    </div>
  )
}