import React, { Component } from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navbar/navbar";
import AboutMe from "./components/Aboutme/about-me";
import ContactMe from "./components/ContactMe/contact-me"
import "./App.css";

const google = window.google
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
export default class App extends Component {

  render() {
    return (

      <div className="about-me-container">
        <div className= "content-container">
          <br></br>
          <div className="text-container">
           
            <p>“One person’s trash is another person’s treasure”.</p>
            <p>Online Marketplace is an online platform for users to list and view new or used goods for trading. </p>
            <p>The application allows buyers and sellers to effectively communicate and schedule meets up with easy to understand procedures and features such as the chat box and reminder.</p>
            <p>Through this platform, we hope to bring convencies for traders and deter online trading scams and fraud.</p>
      
            </div>
          
          <div className="row">
            <div className="footnote-container">
              <h3>HONG KONG OFFICE</h3>
              <p>123 Open Door Road Suite 1200<br />
             Orlando, FL 30030<br />
                <a href="tel:4078981961">407.555.1961</a>
              </p>
            </div>

            <div className="footnote-container">
              <h3>EMAIL ADDRESS</h3>
              <a href="mailto:csci3100gp34@gmail.com">csci3100gp34@gmail.com</a>
            </div>

            <div className="footnote-container">
              <h3>SUPPORT</h3>
              <a href="tel:852999999">852-999-999</a><br />
              <a href="mailto:csci3100gp34@gmail.com">csci3100gp34@gmail.com</a>
              <script
                src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
                async
              ></script>
            </div>
          </div>



          </div>

        </div>
      


    )
  }
};
