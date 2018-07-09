import React from "react";


const Projects = () => (
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
      <h1>Projects</h1>
      <p className="division">_____________</p>
    </div>
    <div className="projectCard">
      <h4>Order Up</h4>
      <a href="/projects/OrderUp">
      <img src="./images/orderUpSS1.png" alt="orderUp1" />
      </a>
      <p>This is a project</p>
    </div>
    <div className="projectCard">
      <h4>Order Up</h4>
      <img src="./images/orderUpSS1.png" alt="orderUp1" />
      <p>This is a project</p>
    </div>
  </div>
);

export default Projects;
