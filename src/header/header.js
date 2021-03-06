import React from "react";
import logo from '../assets/images/logo.png'
import './header.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export default () => {
  return (
    <div className={"header-container"}>
      <Link to={"/"}>
        <img src={logo}/>
      </Link>
      <div className={"header-options-container"}>
        {/* <div className={"header-button-dropdown"}>
          <Link to={"/initiatives"}>
            <h4>Fundraising Initatives</h4>
          </Link>
        </div> */}
        {/* <div className={"header-button-dropdown"}>
          <Link to={"/meet-the-community"}>
            <h4>Students We Support</h4>
          </Link>
        </div> */}
        <div className={"header-button-dropdown"}>
          <Link to={"/donations"}>
            <h4>Donation Impact</h4>
          </Link>
        </div>
        <div className={"header-button-dropdown"}>
          <Link to={"/meet-the-team"}>
            <h4>OWOC Team</h4>
          </Link>
        </div>
        <div className={"header-button-dropdown"}>
          <Link to={"/"}>
            <h4>About</h4>
          </Link>
        </div>
        <div className={"header-button"}>
          <Link to={"/get-in-touch"}>
            <h4 className={"header-button-font"}>Get In Touch</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}