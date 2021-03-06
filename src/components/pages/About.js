import React from "react";

import "./index.css";

const About = () => (
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
    <h1>Resumé</h1>
    <p className="division">_____________</p>
  </div>
  <div className="container">
    <div className="skills">
      <div className = "skillsBody">
        <h2>Design</h2>
        <p className="division">______</p>
        <p>HTML, CSS, Bootstrap, Materialize</p>
        <h2>Front End</h2>
        <p className="division">______</p>
        <p>JavaScript, ReactJS, jQuery, AJAX</p>
        <h2>Back End</h2>
        <p className="division">______</p>
        <p>NodeJS, Express, Mongoose, Sequelize</p>
        <h2>Databases</h2>
        <p className="division">______</p>
        <p>SQL, MongoDB</p>
        <h2>Education</h2>
        <p className="division">______</p>
        <p>Alan C. Pope High School - 2005-2009</p>
        <p>Georgia State University - B.A Political Science - 2009-2015</p>
        <p>Georgia Institute of Technology Coding Bootcamp - November 2017-May 2018</p>
      </div>
    </div>
    <div className="face">
      <img src="./images/face.jpg" alt="code" />
    </div>
  </div>



</div>
);

export default About;
