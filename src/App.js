import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './header/header'
import Footer from './footer/footer'
import Homepage from "./homepage/homepage"
import Initiatives from "./initiatives/initiatives"
import MeetTheCommunity from "./meetTheCommunity/meetTheCommunity"
import MeetTheTeam from "./meetTheTeam/meetTheTeam"
import TeamMembers from "./teamMembers/teamMembers"
import PartnerWithUs from "./partnerWithUs/partnerWithUs"

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/partner-with-us" component={PartnerWithUs}/>
        <Route path="/meet-the-team" component={MeetTheTeam}/>
        <Route path="/initiatives" component={Initiatives}/>
        {/* <Route path="/meet-the-community" component={MeetTheCommunity}/> */}
        <Route path="/team-members" component={TeamMembers}/>
        <Route path="/get-in-touch" component={PartnerWithUs}/>
        <Route path="/" component={Homepage}/>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
