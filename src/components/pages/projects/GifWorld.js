import React from "react";

import GifWorldSS1 from "./projectImages/GifWorldSS1.png";

const GifWorld = () => (
  <div className="projectContainer">
    <div className="projectPage">
      <div className="projectDesc">
        <h1>Gif World</h1>
        <p className="division">_________________</p>
        <h5>About</h5>
        <p>This is a personal project of mine, using ReactJS and Redux to create a simple straightforward gif search app. </p>
        <p>This app can search and display gifs powered by the Giphy API</p>
        <h5>Technologies</h5>
        <ul>
          <li>ReactJS</li>
          <li>Redux</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>ExpressJS</li>
          <li>NodeJS</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <h5>Visit</h5>
        <a href="https://gif-world.herokuapp.com/">Deployed Site</a>
      </div>
      <div className="projectIMG">
        <img src={GifWorldSS1} alt="GifWorld" />
      </div>
    </div>
  </div>
);

export default GifWorld;
