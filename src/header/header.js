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
      <img src={logo}/>
      <div className={"header-options-container"}>
        <div className={"header-button-dropdown"}>
          <h4>Initatives</h4>
        </div>
        <div className={"header-button-dropdown"}>
          <h4>About</h4>
        </div>
        <button className={"header-button"}>
          <Link>
            <h4 className={"header-button-font"}>Get In Touch</h4>
          </Link>
        </button>
      </div>
    </div>
  )
}