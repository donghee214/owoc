import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import "./learnMore.css"

export default ({ nextTitle, nextDescription, linkUri}) => {
  return (
    <div className={"learn-more-container"}>
      <div>
        <h4 className={"learn-more-title"}>
          <span className={"learn-more-next"}>
            NEXT:
          </span>
          { nextTitle }
        </h4>
        <h5 className={"learn-more-description"}>
          { nextDescription }
        </h5>
      </div>
      <Link className={"learn-more-link"} to={linkUri}>
        <h4 className={"learn-more-link-text"}>
          Learn More
        </h4>
      </Link>
    </div>
  )
}