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

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/initiatives" component={Initiatives}/>
        <Route path="/meet-the-community" component={MeetTheCommunity}/>
        <Route path="/" component={Homepage}/>
      </Switch>
      <Footer />
    </Router>

  );
}

export default App;
