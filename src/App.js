import React, { Component } from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar/navbar";
import AboutMe from "./components/Aboutme/about-me";
import ContactMe from "./components/ContactMe/contact-me"
import "./App.css";

export default class App extends Component {
  login = false;

  Menu = [
    {
      title: 'About Me',
      url: '/',
      cName: 'nav-links'
    },
    {
      title: 'Contact Me',
      url: 'ContactMe',
      cName: 'nav-links'
    },
 
  ]

  render() {
    return (
      <Router>
        <div className="App-container">
          <Navbar menuItem={this.Menu} login={this.login}
          />

          <div className="content">
            <Switch>
              <Route exact path="/" > <AboutMe /> </Route>
              <Route exact path="/ContactMe" > <ContactMe /> </Route>
              
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}



