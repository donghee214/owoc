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

          <div id="form-message-warning" class="mb-4"></div> 
          <div id="form-message-success" class="mb-4">
            Your message was sent, thank you!
          </div>
          <form id="contactForm" name="contactForm" class="contactForm">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" name="name" id="name" placeholder="Name *"/>
                </div>
              </div>
              <div class="col-md-6"> 
                <div class="form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Email *"/>
                </div>
              </div>
              <div class="col-md-6"> 
                <div class="form-group">
                  <input type="company" class="form-control" name="Company" id="company" placeholder="Company"/>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <select class="form-control" name="subject" id="subject" placeholder="I am looking to">
                    <option value="">I am looking to</option>
                    <option value="volunteer">Volunteer</option>
                    <option value="join-team">Join team</option>
                    <option value="donate">Donate</option>
                  </select>
                  
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message *"></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <input type="submit" value="Submit" class="btn btn-primary"/>
                  <div class="submitting"></div>
                </div>
              </div>
            </div>
          </form>

        </form>
      </div>
      <img src={getInTouch} className={"partner-image"}/>
    </div>
  )
}