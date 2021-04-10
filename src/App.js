import React, { Component } from 'react';
//import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"



import "./App.css";
import image from "./img/personal-photo.jpeg"



export default class App extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  educationArray = [
    {
      label: "The Chinese University of Hong Kong",
      date: "09/2019-06/2021",
      button: "fa fa-university fa-2x",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/CUHK.svg/300px-CUHK.svg.png",
      width: "60",
      height: "50",

    },
    {
      label: "Hong Kong Community College",
      date: "09/2017-06/2019",
      button: "fa fa-graduation-cap fa-2x",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b7/PolyU_HKCC.svg/800px-PolyU_HKCC.svg.png",
      width: "60",
      height: "50",

    },

    {
      label: "CCC Ming Kei College",
      date: "09/2010-06/2017",
      button: "fa fa-book fa-2x",
      image: "http://www.cccmkc.edu.hk/sites/all/themes/ntemplate/images/logo.png",
      width: "230",
      height: "50",
    },


  ];

  handleSubmit(event) {
    alert('Thank You, I will contact you later  ');
    event.preventDefault();
  }

  render() {
    return (

      <div className="container">
        <div className="content-container">
          <br></br>
          <div className="image-info-container">

            <div className="image-container">
              <img src={image} alt="personal photo" width="160" height="200" />
            </div>

            <div className="info-container">
              <p>
                First Name: Sunny
                  </p>

              <p>
                Last Name: Leung
                  </p>

              <div className="text-container">
                <p>I am a CUHK year four student who is now studying in computer engineering.
                During the years in studying computer-related topics, I explored so much interest in programming.
                I can feel gratification when I completed a different kind of project and this brings me a great dedication to discover more on the theme.
                Handling several tricky projects had also honed my skills in problem solving and determination, which lays the groundwork for my career in the future.
                  </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="education-container">
              <h2>Education</h2>
              <div>
                {this.educationArray.map((item, index) => {
                  return (
                    <div className="array-object" >
                      <a href={item.link} className="button-item">
                        <i class={item.button} aria-hidden="true"></i>
                      </a>
                      <p>{item.label}</p>
                      <img src={item.image} alt="personal photo" width={item.width} height={item.height} />
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="contact-me-container">
              <h2>Contact Me</h2>
              <form onSubmit={this.handleSubmit} >
                <div className="text-field">
                  <label >Name</label>
                  <input type="text" placeholder="Enter your name" />
                </div>

                <div className="text-field">
                  <label >Email</label>
                  <input type="text" placeholder="Enter email address" />
                </div>


                <button type="submit">Login</button>
              </form>

            </div>

          </div>


        </div>

      </div>



    )
  }
};
