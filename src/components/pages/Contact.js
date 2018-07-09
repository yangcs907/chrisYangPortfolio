import React from "react";
import { Link, Route } from "react-router-dom";
import Learn from "./Learn";
import "./index.css";

const Contact = props => (
  <div>
  <div className="home">
    <h1>Chris Yang</h1>
    <p>___________________________</p>
    <p className="subHead">Web Developer      |      <a href="https://github.com/yangcs907"><i className="fab fa-github"></i></a>     |     <a href="https://www.linkedin.com/in/chris-yang-53a66636/">
          <i className="fab fa-linkedin"></i>
          </a>
    </p>
  </div>
  <div className="pageHead">
    <h1>Contact</h1>
    <p className="division">_____________</p>
  </div>
  <div className="contactCard">
    <h1><i className="far fa-envelope"></i></h1>
    <p className="division">_____________</p>
    <p><a href="mailto:yangcs907@gmail.com">yangcs907@gmail.com</a></p>
  </div>
  <div className="contactCard">
    <h1><i className="fas fa-phone-square"></i></h1>
    <p className="division">_____________</p>
    <p>+1 404 993 3556</p>
  </div>
  <div className="faceShot">
    <img src="./images/faceshot.jpg" alt="face"/>
  </div>
</div>
);

export default Contact;
